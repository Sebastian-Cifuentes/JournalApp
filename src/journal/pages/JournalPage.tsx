import { JornalLayout } from "../layout/JornalLayout";
import { NothingSelectedView } from '../views/NothingSelectedView';
import { IconButton } from '@mui/material';
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";
import { NoteView } from "../views";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state: any) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote() as any);
  }

  return (
    <JornalLayout>

      {/* NotView */}

      {
        active ? <NoteView /> : <NothingSelectedView />
      }

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={onClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined
          sx={{fontSize: 30}}
          >

          </AddOutlined>
      </IconButton>

    </JornalLayout>
  )
}
