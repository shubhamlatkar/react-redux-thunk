import React, { useState, useContext } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import CourseContext from "../../Store/Contexts/CourseContext";

const CourseCreationForm = props => {
  const { addCourse } = useContext(CourseContext);

  let [course, setCourse] = useState({
    title: {
      name: "title",
      label: "Title",
      value: "",
      placeholder: "Course Title"
    },
    description: {
      name: "description",
      label: "Description",
      value: "",
      placeholder: "Course description"
    },
    fee: {
      name: "fee",
      label: "Fee",
      value: "",
      placeholder: "Course Fee"
    },
    levels: {
      name: "levels",
      label: "Levels",
      value: "",
      placeholder: "Course Levels"
    },
    duration: {
      name: "duration",
      label: "Duration",
      value: "",
      placeholder: "Course Duration"
    },
    lectures: {
      name: "lectures",
      label: "Lectures",
      value: "",
      placeholder: "Course Lectures"
    },
    TotalPayment: {
      name: "TotalPayment",
      label: "Total Payment",
      value: "",
      placeholder: "Total Payment"
    },
    topics: {
      name: "topics",
      label: "Topics to be covered",
      value: "",
      placeholder: "Enter topics comma seperated"
    }
  });

  const onChangeHandler = event => {
    let name = event.target.name;
    let obj = course[event.target.name];
    obj.value = event.target.value;
    setCourse({ ...course, [name]: obj });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    var temCourse = Object.keys(course).reduce(function(obj, k) {
      if (course[k].name !== "topics" && course[k].name !== "TotalPayment")
        obj[course[k].name] = course[k].value;
      return obj;
    }, {});

    let topics = course.topics.value.split(",").map(topic => {
      return { name: topic, status: false };
    });
    temCourse.topics = topics;
    temCourse.trainerDetails = {
      TotalPayment: course.TotalPayment.value
    };
    addCourse(temCourse);
    props.history.push("/dashboard/trainings");
  };

  let form = Object.keys(course).map(key => (
    <MyInput
      key={course[key].name}
      onChangeHandler={onChangeHandler}
      label={course[key].label}
      title={course[key].title}
      placeholder={course[key].placeholder}
      name={course[key].name}
      value={course[key].value}
    />
  ));

  return (
    <Container className="text-left form-container">
      <Form>
        {form}

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              onClick={onSubmitHandler}
              className="form-container-btn"
            >
              Create Course
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CourseCreationForm;
