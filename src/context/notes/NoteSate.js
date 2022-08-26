import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesI = [
    {
      _id: "62ebbe476891e0da1cc3a26a",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title",
      description: "Hello",
      tag: "personal",
      date: "2022-08-04T12:40:39.220Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57e1e909898",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57e1e909898",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57e1e909898",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
    {
      _id: "6308ae47804cf57e1e909898",
      user: "62e27f3aeb38ce616bf7455a",
      title: "My Title1",
      description: "Hello",
      tag: "personal",
      date: "2022-08-26T11:28:07.302Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesI);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
