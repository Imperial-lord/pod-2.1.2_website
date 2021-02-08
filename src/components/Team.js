import React from "react";
import Slider from "infinite-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { teamDetails, mobileTeamDetails } from "../content/TeamDetails";
import Rashika from "../resources/TeamMembers/Rashika.jpg";
var isMobile = window.orientation > -1;

var newTeamDetails = [];
var margin = "0px";
var thickness;
if (isMobile === true) {
  newTeamDetails = mobileTeamDetails;
  thickness = 2;
  margin = "80px";
} else {
  newTeamDetails = teamDetails;
  thickness = 3;
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "10%",
  },
  submain: {
    marginTop: "10px",
  },
  slider: {
    width: "85%",
    marginTop: "25px",
  },
  images: {
    marginTop: "50px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  container: {
    paddingLeft: "60px",
    paddingRight: "60px",
    marginBottom: "30px",
  },
}));

function Team() {
  const classes = useStyles();
  return (
    <div className="div-class" id="team">
      <center>
        <Typography className={classes.main} variant="h3">
          Meet our Olafs :D
        </Typography>

        <div className={"overflow-hidden rounded-lg h-full w-1/" + thickness}>
          <img className={classes.images} src={Rashika} alt="image" />
          <div>
            <Typography className={classes.submain} variant="h3">
              Pod Leader
            </Typography>
            <div className="font-bold text-xl mb-2 mt-2">Rashika Karki</div>
            <div className="text-gray-700 text-base">Nepal</div>

            <div className={"flex" + classes.centerize}>
              <Grid
                container
                flexGrow={1}
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={14}>
                  <Grid container justify="center" spacing={1}>
                    <Grid key={0} item>
                      <a href="www.github.com">
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
                    </Grid>
                    <Grid key={1} item>
                      <a href="mailto: rashika@email.com">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          width="20"
                          data-icon="envelope"
                          class="svg-inline--fa fa-envelope fa-w-16 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                          ></path>
                        </svg>
                      </a>
                    </Grid>
                    <Grid key={2} item>
                      <a href="linkedin">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          width="20"
                          data-icon="linkedin-in"
                          class="svg-inline--fa fa-linkedin-in fa-w-16 mt-3 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          ></path>
                        </svg>
                      </a>
                    </Grid>
                    <Grid key={3} item>
                      <a href="twitter">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          width="20"
                          data-icon="twitter"
                          class="svg-inline--fa fa-twitter fa-w-16 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          ></path>
                        </svg>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Slider
          className={classes.slider}
          swipe={false}
          duration={400}
          justify="center"
          direction="column"
          autoplay={true}
          autoplaySpeed={4000}
        >
          {newTeamDetails.map((teamPage) => (
            <div>
              <Grid container spacing={2} style={{ marginLeft: margin }}>
                {teamPage.map((member) => (
                  <div
                    className={
                      "overflow-hidden rounded-lg h-full w-1/" + thickness
                    }
                  >
                    <img
                      className={classes.images}
                      src={member.img}
                      alt="image"
                    />
                    <div>
                      <div className="font-bold text-xl mb-2 mt-2">
                        {member.name}
                      </div>
                      <div className="text-gray-700 text-base">
                        {member.position}
                      </div>
                      <div className={"flex" + classes.centerize}>
                        <Grid
                          container
                          flexGrow={1}
                          direction="row"
                          justify="center"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item xs={14}>
                            <Grid container justify="center" spacing={1}>
                              <Grid key={0} item>
                                <a href={member.github}>
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
                              </Grid>
                              <Grid key={1} item>
                                <a href={"mailto:" + member.email}>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    width="20"
                                    data-icon="envelope"
                                    class="svg-inline--fa fa-envelope fa-w-16 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                    ></path>
                                  </svg>
                                </a>
                              </Grid>
                              <Grid key={2} item>
                                <a href={member.linkedin}>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    width="20"
                                    data-icon="linkedin-in"
                                    class="svg-inline--fa fa-linkedin-in fa-w-16 mt-3 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                  </svg>
                                </a>
                              </Grid>
                              <Grid key={3} item>
                                <a href={member.twitter}>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    width="20"
                                    data-icon="twitter"
                                    class="svg-inline--fa fa-twitter fa-w-16 mt-4 ml-2 mr-2 text-4xl text-gray-500 hover:text-indigo-600"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                  </svg>
                                </a>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      {member.tags &&
                        member.tags.map((tag, index) => (
                          <span
                            key={index}
                            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-700 mr-2 mt-2"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </Grid>
            </div>
          ))}
        </Slider>
      </center>
    </div>
  );
}

export default Team;
