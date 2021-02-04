import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projects from "../content/projects";
//import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: "30px",
    marginTop: "40px",
    width: "100% !important",
  },
  card: {
    marginTop: "40px",
  },
  icon: {
    fontSize: "50px",
    color: "#06c",
  },
  button: {
    margin: "auto",
    marginTop: "20px",
  },
  heading: {
    fontWeight: 600,
  },
}));

function ProjectCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} className={classes.alignCenter}>
        <Typography variant="h3">Our Projects</Typography>
      </Grid>
      <div className="flex flex-row flex-wrap mx-auto max-w-screen-lg lg:justify-start justify-around">
        {projects
          ? projects.map((item, index) => (
              <div className="max-w-lg p-4 w-full">
                <div className="overflow-hidden rounded-lg shadow-lg h-full">
                  <img
                    className="w-full mx-auto"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbE6APktdcqrf_wE21zAc1hE1QmeSLdsOgg&usqp=CAU"
                    }
                    alt="project"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.title}</div>
                    <div className="text-gray-700 text-base">
                      {item.content}
                    </div>
                    <div className="flex">
                      <a
                        href="https://github.com/coronasafe/care_fe/"
                        target="_blank"
                      >
                        <svg
                          class="svg-inline--fa fa-github fa-w-16 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                          aria-hidden="true"
                          focusable="false"
                          width="20"
                          data-prefix="fab"
                          data-icon="github"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://coronasafe.network/tools"
                        target="_blank"
                      >
                        <svg
                          class="svg-inline--fa fa-external-link-square-alt fa-w-14 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                          aria-hidden="true"
                          focusable="false"
                          width="20"
                          data-prefix="fas"
                          data-icon="external-link-square-alt"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"
                          ></path>
                        </svg>{" "}
                      </a>
                    </div>
                  </div>

                  <div className="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-700 mr-2 mt-2">
                      Django
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-700 mr-2 mt-2">
                      React
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-700 mr-2 mt-2">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectCard;
//item.title
//item.buttonText
//item.content