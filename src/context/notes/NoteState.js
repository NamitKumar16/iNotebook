import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesI = [];

  const [notes, setNotes] = useState(notesI);

  // Get All Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMjdmM2FlYjM4Y2U2MTZiZjc0NTVhIn0sImlhdCI6MTY2MDMwNDk5OX0.fXehwZuLcm6abSbOFLaOhEc7TZrBQsCBWBqJrY59j_U",
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMjdmM2FlYjM4Y2U2MTZiZjc0NTVhIn0sImlhdCI6MTY2MDMwNDk5OX0.fXehwZuLcm6abSbOFLaOhEc7TZrBQsCBWBqJrY59j_U",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { title, description, tag } }),
    });
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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMjdmM2FlYjM4Y2U2MTZiZjc0NTVhIn0sImlhdCI6MTY2MDMwNDk5OX0.fXehwZuLcm6abSbOFLaOhEc7TZrBQsCBWBqJrY59j_U",
        "Content-Type": "application/json",
      },
    });
    const json = response.json();
    console.log(json);
    
    console.log(id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMjdmM2FlYjM4Y2U2MTZiZjc0NTVhIn0sImlhdCI6MTY2MDMwNDk5OX0.fXehwZuLcm6abSbOFLaOhEc7TZrBQsCBWBqJrY59j_U",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { title, description, tag } }),
    });
    const result = await response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, deleteNote, editNote, getNotes, addNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
