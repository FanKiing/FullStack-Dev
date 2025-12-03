import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterGroupe,
  decrementNoteDiscipline,
} from "../redux/stagiaireSlice";
import { addAbsence, setFilterGroupeAbs } from "../redux/absenceSlice";
import { distinctGroups } from "../utils/distinctGroups";

export default function Stagiaires() {
  const dispatch = useDispatch();

  const stagiaires = useSelector((state) => state.stagiaires.list);
  const filter = useSelector((state) => state.stagiaires.filterGroupe);
  const absences = useSelector((state) => state.absences.list);

  const [checkedState, setCheckedState] = React.useState({});

  const groupes = React.useMemo(
    () => distinctGroups(stagiaires),
    [stagiaires]
  );

  const filteredStagiaires = React.useMemo(() => {
    if (filter === "ALL") return stagiaires;
    return stagiaires.filter((s) => s.groupe === filter);
  }, [stagiaires, filter]);

  const onSelectGroup = (e) => {
    const value = e.target.value;
    dispatch(setFilterGroupe(value));
    dispatch(setFilterGroupeAbs(value));
  };

  const onToggleCheckbox = (cef) => {
    setCheckedState((prev) => ({
      ...prev,
      [cef]: !prev[cef],
    }));
  };

  const handleSaveAbsence = (cef, grp) => {
    if (!checkedState[cef]) return;

    const today = new Date().toISOString().slice(0, 10);

    dispatch(
      addAbsence({
        cef,
        groupe: grp,
        date: today,
      })
    );

    dispatch(decrementNoteDiscipline(cef));

    setCheckedState((prev) => ({
      ...prev,
      [cef]: false,
    }));
  };

  const recentAbs = absences.slice().reverse().slice(0, 5);

  return (
    <div className="container page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h2 className="page-title">Stagiaires</h2>
          <p className="page-subtitle">
            Liste filtrable des stagiaires avec note de discipline en temps réel.
          </p>
        </div>
        <div className="page-meta">
          <div>Total : {stagiaires.length} stagiaires</div>
        </div>
      </div>

      {/* CARD */}
      <div className="card-elevated">

        {/* FILTER BAR */}
        <div className="filter-bar">
          <div style={{ flex: 1 }}>
            <label>Filtrer par groupe</label>
            <select
              className="form-select"
              value={filter}
              onChange={onSelectGroup}
            >
              <option value="ALL">Tous</option>
              {groupes.map((grp) => (
                <option key={grp} value={grp}>
                  {grp}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TABLE */}
        <div className="table-wrapper">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>CEF</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Groupe</th>
                <th>Note discipline</th>
                <th>Absent ?</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStagiaires.map((s) => (
                <tr key={s.cef}>
                  <td>{s.cef}</td>
                  <td>{s.nom}</td>
                  <td>{s.prenom}</td>
                  <td>
                    <span className="badge-pill badge-groupe">{s.groupe}</span>
                  </td>

                  <td>
                    {s.noteDiscipline >= 10 ? (
                      <span className="badge-pill badge-note-high">
                        {s.noteDiscipline}/20
                      </span>
                    ) : (
                      <span className="badge-pill badge-note-low">
                        {s.noteDiscipline}/20
                      </span>
                    )}
                  </td>

                  <td>
                    <input
                      type="checkbox"
                      checked={!!checkedState[s.cef]}
                      onChange={() => onToggleCheckbox(s.cef)}
                    />
                  </td>

                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleSaveAbsence(s.cef, s.groupe)}
                    >
                      <span className="btn-icon"></span>
                      Enregistrer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RECENT ABSENCES */}
        <div className="recent-box">
          <div className="recent-title">Absences récentes</div>
          <ul className="recent-list">
            {recentAbs.map((a) => (
              <li key={a.id}>
                <span className="date">{a.date}</span>
                <span>
                  {a.cef} — {a.groupe}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
