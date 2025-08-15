import CreateNotecard from "@/components/ui/CreateNoteCard";
import Notecard from "../components/ui/NoteCard";
import { useEffect, useState } from "react";
function Home() {
  type Note = {
    id: number;
    title: string;
    description: string;
    issave?: boolean;
  };
  const [note, setNote] = useState<Note[]>(() => {
    const saved = localStorage.getItem("Notes");
    return saved
      ? JSON.parse(saved)
      : [{ id: 0, title: "Note", description: "this is note", issave: false }];
  });

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(note));
  }, [note]);

  function handelCreateNote() {
    setNote((prev) => [
      ...prev,
      { id: prev.length + 1, title: "", description: "" },
    ]);
  }

  function handelDelete(id: number) {
    setNote((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handelEdit(id: number) {
    setNote((prev) =>
      prev.map((n) => (n.id === id ? { ...n, issave: false } : n))
    );
  }

  function handelAccept(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    e.preventDefault();
    console.log(e);
    setNote((prev) =>
      prev.map((n) => (n.id === id ? { ...n, issave: true } : n))
    );
  }
  function handelRejected(e: React.MouseEvent<HTMLButtonElement>, id: number) {
    e.preventDefault();
    console.log(e);
    setNote((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, title: "", description: "", issave: false } : n
      )
    );
  }

  function handleValueChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) {
    const { name, value } = e.target;

    setNote((prev) =>
      prev.map((n) =>
        n.id === id
          ? name === "title"
            ? { ...n, title: value }
            : { ...n, description: value }
          : n
      )
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-3">
      {note.map((n) => (
        <Notecard
          key={n.id}
          id={n.id}
          Title={n.title}
          Description={n.description}
          issave={n.issave || false}
          onAcceptClick={(e) => handelAccept(e, n.id)}
          onRefuseClick={(e) => handelRejected(e, n.id)}
          onValueChange={(e) => handleValueChange(e, n.id)}
          onDelete={() => handelDelete(n.id)}
          onEdit={() => handelEdit(n.id)}
        />
      ))}
      <CreateNotecard
        id={-1}
        Title="Create Note"
        Description="+"
        onClick={() => handelCreateNote()}
      />
    </div>
  );
}

export default Home;
