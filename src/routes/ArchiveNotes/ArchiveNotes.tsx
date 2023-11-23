import React, { useState } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";
import NewNoteModal from "../../components/Modal/AddNoteModal/AddNoteModal";
import { toggleAddNoteModal } from "../../store/modal/modalSlice";
import Header from "../../layout/Header/Header";

function ArchiveNotes() {
  const { archiveNotes } = useAppSelector((state) => state.notesList);
  return (
    <div>
      <Header />
      {archiveNotes.length === 0 ? (
        <div>노트가 없습니다.</div>
      ) : (
        <MainWrapper notes={archiveNotes} type="archive" />
      )}
    </div>
  );
}

export default ArchiveNotes;
