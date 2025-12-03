import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterGroupe, decrementNoteDiscipline } from "../features/StagiaireSlice";
import { addAbsence, setFilterGroupeAbs } from "../features/AbsenceSlice";

export default function Stagiaires() {
  const dispatch = useDispatch();

  const stagiaires = useSelector(state => state.stagiaires.list);
  const filter = useSelector(state => state.stagiaires.filterGroupe);
  const absences = useSelector(state => state.absences.list);

  const [checked, setChecked] = React.useState({});

  // Récupérer les groupes distincts
  const groupes = Array.from(new Set(stagiaires.map(s => s.groupe))).sort();

  // Filtrer les stagiaires selon le groupe sélectionné
  const filteredStagiaires = filter === "ALL" 
    ? stagiaires 
    : stagiaires.filter(s => s.groupe === filter);

  // Gestion de la checkbox
  const handleSelect = (cef) => {
    setChecked({...checked,[cef]:true});
  };

  // Vérifier si le stagiaire est déjà absent
  const isAbsent = (cef) => absences.some(a => a.cef === cef);

  // Enregistrer l'absence
  const handleSave = (stagiaire) => {
    if (!checked[stagiaire.cef]) return;

    const today = new Date().toISOString().slice(0, 10);

    dispatch(addAbsence({
      cef: stagiaire.cef,
      groupe: stagiaire.groupe,
      date: today
    }));

    dispatch(decrementNoteDiscipline({ cef: stagiaire.cef, amount: 1 }));

   // setChecked(prev => ({ ...prev, [stagiaire.cef]: false }));
  };

  // Changement de filtre de groupe
  const handleGroupChange = (e) => {
    const groupe = e.target.value;
    dispatch(setFilterGroupe(groupe));

  };

  return (
    <div className="container">
      <h2 className="mb-3">Gestion des stagiaires</h2>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Filtrer par groupe :</label>
        <div className="col-sm-4">
          <select className="form-select" value={filter} onChange={handleGroupChange}>
            <option value="ALL">Tous</option>
            {groupes.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>CEF</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Groupe</th>
            <th>Note discipl.</th>
            <th>Absent ?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStagiaires.map(stagiaire => {
            const absent = isAbsent(stagiaire.cef);

            return (
              <tr
                key={stagiaire.cef}
                style={{
                  backgroundColor: absent ? "#f00" : "transparent",
                  textDecoration: absent ? "line-through" : "none"
                }}
              >
                <td>{stagiaire.cef}</td>
                <td>{stagiaire.nom}</td>
                <td>{stagiaire.prenom}</td>
                <td>{stagiaire.groupe}</td>
                <td>{stagiaire.noteDiscipline}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={!!checked[stagiaire.cef]}
                    disabled={absent}
                    onChange={() => handleSelect(stagiaire.cef)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    disabled={absent}
                    onClick={() => handleSave(stagiaire)}
                  >
                    Save
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h5 className="mt-4">Dernières absences :</h5>
      <ul>
        {absences.slice().reverse().slice(0, 5).map(a => (
          <li key={a.id}>{a.date} — {a.cef} ({a.groupe})</li>
        ))}
      </ul>
    </div>
  );
}
