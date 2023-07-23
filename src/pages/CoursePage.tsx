import React, {MouseEvent, useEffect, useState} from "react";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchCourse} from "../store/ActionCreators";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import CourseCommentsPopup from "../components/course/CourseCommentsPopup";
import {ITopic} from "../models/models";

export function CoursePage() {
  const params = useParams<"id">();
  const dispatch = useAppDispatch();
  const {course} = useAppSelector(state => state.courseDetailReducer);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ITopic>({
    id: 0,
    name: "",
    date: "",
    type: "",
    status: "",
    description: "",
    comment: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchCourse(params.id!))
  }, [dispatch, params.id])

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      sortable: false,
    },
    {
      field: "name",
      headerName: "Topic",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "description",
      headerName: "Description",
      sortable: false,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      sortable: false,

      renderCell: (params) => {
        const onClick = (event: MouseEvent<HTMLButtonElement>) => {
          const currentRow = params.row;
          setSelectedRow(currentRow);
          setOpen(true);
        };

        return (
          <Button variant="outlined" color="primary" size="small" onClick={onClick}>View note</Button>
        );
      },
    }
  ];

  return (
      <Container component="main">
        <Box sx={{ height: 400, width: "100%" }} mt={5}>
          <DataGrid
              rows={course?.course_topics || []}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
          />
        </Box>
        <CourseCommentsPopup
          open={open}
          handleClose={handleClose}
          selectedRow={selectedRow}
        />
      </Container>
  )
}