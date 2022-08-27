import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesI = [
    {
      _id: "62ebbe476891e0da1ccr3a26a",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title",
      description: "Hello",
      tag: "personal",
      date: "2022-08-04T12:40:39.220Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57de1e909898",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57ev1e90989",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57eb1e90988",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57e1e909a98",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesI);

  // Add a Note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "6308ae47804cf5d7e1e909a98",
      user: "62e27f3aeb38ce616bf7455a",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {};

  // Edit a Note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
