import React, {ChangeEvent, useEffect, useRef} from "react";
import {CourseCard} from "../components/course/CourseCard";
import {fetchCourses} from "../store/ActionCreators";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Pagination, Stack} from "@mui/material";
import Container from "@mui/material/Container";

const ITEMS_PER_PAGE = 50;
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export function MainPage() {
  const {courses, count, loading, error} = useAppSelector(state => state.courseReducer);
  const page = useRef(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourses(page.current, ITEMS_PER_PAGE));
  }, [dispatch]);

  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  const pageChangeHandler = (event: ChangeEvent<unknown>, currentPage : number) => {
    page.current = currentPage + 1;
    dispatch(fetchCourses(page.current, ITEMS_PER_PAGE));
  }

  return (
    <Container component="main">
      {error && <p className="text-red-600">{error}</p>}
        {
          loading
            ? <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Loading
              </Typography>
            : null
        }
        <Grid item xs={12} md={6} mt={6}>
          <Demo>
            <List>
              {
                count > 0
                  ? courses.map(course => (
                    <CourseCard course={course} key={course.id}/>
                  ))
                  : <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                      No Items
                    </Typography>
              }
            </List>
          </Demo>
        </Grid>
        {
          pageCount
            ? <Stack spacing={2}>
              <Pagination
                  count={pageCount}
                  color="primary"
                  onChange={pageChangeHandler}
              />
          </Stack>
            : null
        }
    </Container>
  )
}