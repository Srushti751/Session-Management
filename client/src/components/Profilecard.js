import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";
import { getUser, updateImage } from "../apis/employeeapi";

function Profilecard({
  profile,
  edit,

  setUsername,
  setEmpid,
  setLocation,
  setContact,
  setProfile,
}) {
  let user = useSelector((state) => state.loginUserReducer.currentUser);
  const token = user && user.token;
  const userDet = token ? jwtDecode(token) : "";

  const onChangeFile = async (event) => {
    const formData = new FormData();
    formData.append("profileImage", event.target.files[0]);
    try {
      await updateImage(userDet.id, formData);

      alert("updated");
      const newdata = await getUser(userDet.id);
      setProfile(newdata.data);
      console.log("newdata", newdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {profile &&
        profile.map((prof) => (
          <div className="page-content page-container" id="page-content">
            {console.log(edit)}

            <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-12 col-md-12">
                  <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                      <div className="col-sm-4 bg-c-lite-green user-profile">
                        <div className="card-block text-center text-white">
                          <div className="m-b-25 ">
                            {prof.profileImg ? (
                              <img
                                src={prof.profileImg}
                                className="img-radius m-3"
                                alt="User-Profile-Image"
                                width={100}
                                height={100}
                              />
                            ) : (
                              <img
                                src="https://img.icons8.com/bubbles/100/000000/user.png"
                                class="img-radius"
                                alt="User-Profile-Image"
                              />
                            )}
                            <input
                              type="file"
                              id="file"
                              style={{ display: "none" }}
                              onChange={(e) => onChangeFile(e)}
                              name="profileImage"
                            />
                            <label htmlFor="file">
                              <GrEdit />
                            </label>
                          </div>
                          <Form.Control
                            type="text"
                            className="f-w-400  text-center colorStyle"
                            defaultValue={prof.name}
                            plaintext={edit}
                            disabled={edit}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          {/* <p>Web Designer</p> */}
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                            Software Engineer
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Emp code</p>
                              <Form.Control
                                type="text"
                                className="f-w-400 text-muted"
                                defaultValue={prof.empid}
                                plaintext={edit}
                                disabled={edit}
                                onChange={(e) => setEmpid(e.target.value)}
                                // onChange={(e) => console.log(e.target.name)}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Phone</p>
                              <Form.Control
                                type="text"
                                className="f-w-400 text-muted"
                                defaultValue="000000000"
                                plaintext={edit}
                                disabled={edit}
                                onChange={(e) => setContact(e.target.value)}
                              />
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Location</p>
                              <Form.Control
                                type="text"
                                className="f-w-400 text-muted"
                                defaultValue={prof.location}
                                plaintext={edit}
                                disabled={edit}
                                onChange={(e) => setLocation(e.target.value)}
                              />
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Tech Stack</p>
                              <h6 className="text-muted f-w-400">JS Backend</h6>
                            </div>
                          </div>
                          <ul className="social-link list-unstyled m-t-40 m-b-10">
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="facebook"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-facebook feather icon-facebook facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="twitter"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-twitter feather icon-twitter twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title=""
                                data-original-title="instagram"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-instagram feather icon-instagram instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Profilecard;
