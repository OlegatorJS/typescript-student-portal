import React from "react";
import {ICourse} from "../../models/models";
import {useNavigate} from "react-router-dom";
import {ListItem, ListItemButton, ListItemText} from "@mui/material";

interface CourseCardProps {
  course: ICourse
}

export function CourseCard({ course }: CourseCardProps) {
  const navigate = useNavigate()

  const openCourse = () => {
    navigate("/course/" + course.id)
  }

  return (
      <ListItem>
          <ListItemButton onClick={openCourse}>
              <ListItemText
                  primary={course.name}
                  secondary={course.description}
              />
          </ListItemButton>
      </ListItem>
  )
}