import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterGroupeAbs } from "../features/AbsenceSlice";
import { setFilterGroupe } from "../features/StagiaireSlice";

export default function Absences() {
  const dispatch = useDispatch();
  const absences = useSelector(state => state.absences.list);
  const filter = useSelector(state => state.absences.filterGroupe);
  const stagiaires = useSelector(state => state.stagiaires.list);

  const groupes = Array.from(new Set(stagiaires.map(s => s.groupe)));

  const handleChange = (e) => {
    dispatch(setFilterGroupeAbs(e.target.value));
    dispatch(setFilterGroupe(e.target.value));
  };

  const filtered = filter === "ALL" ? absences : absences.filter(a => a.groupe === filter);

  const sorted = filtered.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container">
      <h2>Liste des absences</h2>

      <select className="form-select mb-3" value={filter} onChange={handleChange}>
        <option value="ALL">Tous</option>
        {groupes.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>CEF</th>
            <th>Nom</th>
            <th>Groupe</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(a => {
            const st = stagiaires.find(s => s.cef === a.cef) || {};
            return (
              <tr key={a.id}>
                <td>{a.date}</td>
                <td>{a.cef}</td>
                <td>{st.nom} {st.prenom}</td>
                <td>{a.groupe}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
