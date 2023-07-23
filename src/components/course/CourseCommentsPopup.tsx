import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {ITopic} from "../../models/models";
import {createComment} from "../../store/ActionCreators";
import {MouseEvent, useState} from "react";
import {useAppDispatch} from "../../hooks/redux";

interface CourseCommentsPopupProps {
    handleClose: () => void
    open: boolean,
    selectedRow: ITopic
}

export default function CourseCommentsPopup({
    handleClose,
    open,
    selectedRow
} : CourseCommentsPopupProps) {
    const [value, setValue] = useState(selectedRow.comment);
    const dispatch = useAppDispatch();

    const handleChangeNote = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(createComment(selectedRow.id, value));
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>{selectedRow.name}</DialogTitle>
            <DialogContent>
                <TextField
                    multiline
                    margin="dense"
                    minRows={4}
                    defaultValue={selectedRow.comment}
                    id="note"
                    label="Change note"
                    type="text"
                    fullWidth
                    onChange={e => setValue(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleChangeNote}>Change note</Button>
            </DialogActions>
        </Dialog>
    );
}