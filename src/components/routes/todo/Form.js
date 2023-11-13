import React, { useState } from 'react';

function Form({ addItem }) {
  const [description, setDescription] = useState("");

  function ajout(e) {
    e.preventDefault();

    if (!description) return;

    addItem(description);
    setDescription("");
  }

  return (
    <form className="ajouter-form" onSubmit={ajout}>
      <h3 className="form-title">📑📝 Organisez votre vie 📑📝</h3>
      <input
        type="text"
        placeholder="tache..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <button className="form-button">Ajouter</button>
    </form>
  );
}

export default Form;
