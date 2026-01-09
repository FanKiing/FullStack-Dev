import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StagiairesCard from "../components/StagiairesCard";
import FormStagiaire from "../components/FormStagiaire";
import {
  deleteStagiaire,
  addStagiaire,
  updateStagiaire,
  setFilterFiliere,
  setSearchTerm,
} from "../features/stagiaires/stagiairesSlice";
import {
  selectDistinctFilieres,
  selectFilteredStagiaires,
  selectFilterFiliere,
  selectSearchTerm,
} from "../features/stagiaires/selectors";

export default function ListStagiaires() {
  const dispatch = useDispatch();

  const stagiaires = useSelector(selectFilteredStagiaires);
  const filieres = useSelector(selectDistinctFilieres);
  const filterFiliere = useSelector(selectFilterFiliere);
  const searchTerm = useSelector(selectSearchTerm);

  const [editing, setEditing] = useState(null);

  const handleSubmit = (data) => {
    if (editing?.id) {
      dispatch(updateStagiaire({ id: editing.id, changes: data }));
      setEditing(null);
    } else {
      dispatch(addStagiaire(data));
    }
  };

  return (
    <div>
      <h2>Liste des Stagiaires</h2>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <select
          aria-label="filter-filiere"
          value={filterFiliere}
          onChange={(e) => dispatch(setFilterFiliere(e.target.value))}
        >
          {filieres.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>

        <input
          aria-label="search"
          placeholder="Recherche nom / prénom / filière"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>

      <hr />

      <FormStagiaire
        initialValues={editing}
        onSubmit={handleSubmit}
        onCancel={() => setEditing(null)}
      />

      <hr />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {stagiaires.map((s) => (
          <StagiairesCard
            key={s.id}
            stagiaire={s}
            onDelete={(id) => dispatch(deleteStagiaire(id))}
            onEdit={(stag) => setEditing(stag)}
          />
        ))}
      </div>
    </div>
  );
}
