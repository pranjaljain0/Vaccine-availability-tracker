(this["webpackJsonpcollegepass-advisorpanel"] = this["webpackJsonpcollegepass-advisorpanel"] || []).push([[5],{

/***/ "./src/components/Sidebar/index.jsx":
/*!******************************************!*\
  !*** ./src/components/Sidebar/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_LogoutModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/LogoutModal */ "./src/components/Modal/LogoutModal.jsx");
/* harmony import */ var _mobile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile.css */ "./src/components/Sidebar/mobile.css");
/* harmony import */ var _mobile_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mobile_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar.css */ "./src/components/Sidebar/sidebar.css");
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sidebar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_API__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/API */ "./src/config/API.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_studentInfoActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/studentInfoActions */ "./src/actions/studentInfoActions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/pranjal/Documents/Collegepass/github/collegepass-advisorPanel/src/components/Sidebar/index.jsx",
    _s = __webpack_require__.$Refresh$.signature();


 //import profileImg from './';











const DEFAULT_PROFILE_PIC = "" + "/Student-img.jpg";

const Sidebar = () => {
  _s();

  const [show, setShowLgout] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleCloseLgout = () => setShowLgout(false);

  const handleShowLgout = () => setShowLgout(true);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.CollegePassToken_AP}`
    }
  };
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.auth);
  const {
    fullName,
    userRole
  } = auth;
  const [student_id, setStudent_id] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const studentInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.studentInfo);
  const [isStudent, setisStudent] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [isParent, setIsParent] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isAdvisor, setIsAdvisor] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isLeadAdvisor, setIsLeadAdvisor] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isEditor, setIsEditor] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isManager, setIsManager] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    studentName,
    studentEmail
  } = studentInfo;
  const [profilePicture, setProfilePicture] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(DEFAULT_PROFILE_PIC);
  const [userEmail, setUserEmail] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const handleBannerChange = e => {
    if (e.target.files.length) {
      storeProfilePicture(e.target.files[0], userEmail);
    }
  };

  const getUserProfilePicture = async userEmail => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config_API__WEBPACK_IMPORTED_MODULE_7__["APIGetUserProfilePic"]}${userEmail}`, config);

      if (res.data.statusCode === 200) {
        setProfilePicture(res.data.body);
      } else {
        setProfilePicture(DEFAULT_PROFILE_PIC);
      }
    } catch (error) {
      console.error(`Error in getUserProfilePicture ${error}`);
    }
  };

  const storeProfilePicture = async (imageFile, userEmail) => {
    try {
      var data = new form_data__WEBPACK_IMPORTED_MODULE_6___default.a();
      data.append("profilePicture", imageFile);
      data.append("userEmail", userEmail);
      const updateResponse = await fetch(_config_API__WEBPACK_IMPORTED_MODULE_7__["APIStoreUserProfilePic"], {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.CollegePassToken_AP}`
        },
        body: data
      });

      if (updateResponse.status === 200) {
        getUserProfilePicture(userEmail);
      }
    } catch (error) {
      console.error(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (auth.userRole === 1) {
      if (auth.isParent !== 1) {
        setUserEmail(auth.email);
        getUserProfilePicture(auth.email);
      } else {
        setisStudent(false);
        setIsParent(true);
        setUserEmail(studentInfo.studentEmail);
        getUserProfilePicture(studentInfo.studentEmail);
        setStudent_id(studentInfo.studentUserID);
      }
    } else if (auth.userRole === 2) {
      setisStudent(false);
      setIsAdvisor(true);
      setUserEmail(studentInfo.studentEmail);
      getUserProfilePicture(studentInfo.studentEmail);
      setStudent_id(studentInfo.studentUserID);
    } else if (auth.userRole === 3) {
      setisStudent(false);
      setIsLeadAdvisor(true);
      setUserEmail(studentInfo.studentEmail);
      getUserProfilePicture(studentInfo.studentEmail);
      setStudent_id(studentInfo.studentUserID);
    } else if (auth.userRole === 4) {
      setisStudent(false);
      setIsEditor(true);
      setUserEmail(studentInfo.studentEmail);
      getUserProfilePicture(studentInfo.studentEmail);
      setStudent_id(studentInfo.studentUserID);
    } else if (auth.userRole === 5) {
      setisStudent(false);
      setIsManager(true);
      setUserEmail(studentInfo.studentEmail);
      getUserProfilePicture(studentInfo.studentEmail);
      setStudent_id(studentInfo.studentUserID);
    }
  }, [auth, profilePicture, userEmail, studentInfo]);

  const onClickHandleStudentRemoval = () => {
    dispatch(Object(_actions_studentInfoActions__WEBPACK_IMPORTED_MODULE_9__["removeStudentInformation"])());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        lg: 2,
        md: 3,
        sm: 12,
        xs: 12,
        className: "bg-black sidebar border-right pb-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
          className: "pt-3 pb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            lg: 2,
            md: 2,
            sm: 2,
            xs: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            lg: 8,
            md: 8,
            sm: 8,
            xs: 8,
            className: "text-center hover-hidden-icon p-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
              for: "file",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                src: profilePicture,
                className: "profile-sidebar cursor-pointer",
                alt: "Profile Pic"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
                className: "edit",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("i", {
                  className: "fa fa-camera cursor-pointer",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  type: "file",
                  id: "file",
                  style: {
                    display: "none"
                  },
                  name: "image",
                  accept: "image/gif,image/jpeg,image/jpg,image/png",
                  multiple: "",
                  "data-original-title": "upload photos",
                  onChange: handleBannerChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            lg: 2,
            md: 2,
            sm: 2,
            xs: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            lg: 12,
            md: 12,
            sm: 12,
            xs: 12,
            className: "text-center pt-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h2", {
              className: "name-profile gold-color",
              children: userRole > 1 || isParent ? studentName : fullName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
          className: "pb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
            className: "pb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
              defaultActiveKey: "",
              className: "flex-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: "/home",
                className: "bg-gray border-radius-4 color-gold",
                onClick: onClickHandleStudentRemoval,
                children: userRole > 1 ? "Student List" : "Profile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 15
              }, undefined), userRole > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: `/${student_id}`,
                className: "white-color",
                children: "Profile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: "/meeting",
                className: "white-color",
                children: "Meeting"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                eventKey: "tasks",
                href: "/tasks",
                className: "white-color",
                children: "Tasks"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/chat" : "/" + student_id + "/chat",
                className: "bg-gray border-radius-4 color-gold",
                children: "DISCUSSION BOARD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 15
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                title: "College Shortlisting",
                id: "basic-nav-dropdown",
                className: "white-color",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/instructions" : "/" + student_id + "/us",
                  className: "white-color",
                  children: "US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/uk" : "/" + student_id + "/uk",
                  className: "white-color",
                  children: "UK"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/canada" : "/" + student_id + "/canada",
                  className: "white-color",
                  children: "Canada"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/apac" : "/" + student_id + "/apac",
                  className: "white-color",
                  children: "Apac"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/profile" : "/" + student_id + "/profile",
                eventKey: "profile",
                className: "white-color",
                children: "Student Information"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/grades" : "/" + student_id + "/grades",
                eventKey: "grades",
                className: "white-color",
                children: "High School Grades"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/testing" : "/" + student_id + "/testing",
                eventKey: "testing",
                className: "white-color",
                children: "Testing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/extracurriculars" : "/" + student_id + "/extracurriculars",
                eventKey: "extracurriculars",
                className: "white-color",
                children: "Extracurriculars"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                title: "Summer",
                id: "basic-nav-dropdown",
                className: "white-color",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/summer-programs" : "/" + student_id + "/summer-programs",
                  className: "white-color",
                  children: "Programs"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/summer-plan" : "/" + student_id + "/summer-plan",
                  className: "white-color",
                  children: "Plan"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                title: "Essay",
                id: "basic-nav-dropdown",
                className: "white-color",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/reading-list" : "/" + student_id + "/reading-list",
                  className: "white-color",
                  children: "Reading List"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/summer-school" : "/" + student_id + "/summer-school",
                  className: "white-color",
                  children: "Summer School"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/colleges" : "/" + student_id + "/colleges",
                  className: "white-color",
                  children: "Colleges"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 15
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/school-support" : "/" + student_id + "/school-support",
                eventKey: "school-support",
                className: "white-color",
                children: "School Support"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/connections" : "/" + student_id + "/connections",
                eventKey: "connections",
                className: "white-color",
                children: "Connections"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                href: !isAdvisor ? "/context" : "/" + student_id + "/context",
                eventKey: "Context",
                className: "white-color",
                children: "Context"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 17
              }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                title: "Resources",
                id: "basic-nav-dropdown",
                className: "white-color",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/ngo-list" : "/" + student_id + "/ngo-list",
                  className: "white-color",
                  children: "NGO List"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/online-courses" : "/" + student_id + "/online-courses",
                  className: "white-color",
                  children: "Online Courses"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/hackathons" : "/" + student_id + "/hackathons",
                  className: "white-color",
                  children: "Hackathons"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/internships" : "/" + student_id + "/internships",
                  className: "white-color",
                  children: "Internships"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/olympiads" : "/" + student_id + "/olympiads",
                  className: "white-color",
                  children: "Olympiads"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 436,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/competitions" : "/" + student_id + "/competitions",
                  className: "white-color",
                  children: "Competitions"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                  href: !isAdvisor ? "/financial-aid" : "/" + student_id + "/financial-aid",
                  className: "white-color",
                  children: "Financial Aid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      className: "sidebar-for-mobile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
          className: "bg-black border-bottom-header",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("nav", {
            role: "navigation",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              id: "menuToggle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                type: "checkbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 490,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 491,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("ul", {
                id: "menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
                  defaultActiveKey: "",
                  className: "flex-column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: "/home",
                    className: "bg-gray border-radius-4 color-gold",
                    onClick: onClickHandleStudentRemoval,
                    children: userRole > 1 ? "Student List" : "Profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 496,
                    columnNumber: 19
                  }, undefined), userRole > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: `/${student_id}`,
                    className: "white-color",
                    children: "Profile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 505,
                    columnNumber: 21
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: "/meeting",
                    className: "white-color",
                    children: "Meeting"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 511,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    eventKey: "tasks",
                    href: "/tasks",
                    className: "white-color",
                    children: "Tasks"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 516,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 519,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/chat" : "/" + student_id + "/chat",
                    className: "bg-gray border-radius-4 color-gold",
                    children: "DISCUSSION BOARD"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 521,
                    columnNumber: 17
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                    title: "College Shortlisting",
                    id: "basic-nav-dropdown",
                    className: "white-color",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/instructions" : "/" + student_id + "/us",
                      className: "white-color",
                      children: "US"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 534,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/uk" : "/" + student_id + "/uk",
                      className: "white-color",
                      children: "UK"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 542,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/canada" : "/" + student_id + "/canada",
                      className: "white-color",
                      children: "Canada"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 548,
                      columnNumber: 21
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 529,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/profile" : "/" + student_id + "/profile",
                    eventKey: "profile",
                    className: "white-color",
                    children: "Student Information"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 558,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/grades" : "/" + student_id + "/grades",
                    eventKey: "grades",
                    className: "white-color",
                    children: "High School Grades"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 567,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/testing" : "/" + student_id + "/testing",
                    eventKey: "testing",
                    className: "white-color",
                    children: "Testing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 576,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/extracurriculars" : "/" + student_id + "/extracurriculars",
                    eventKey: "extracurriculars",
                    className: "white-color",
                    children: "Extracurriculars"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 585,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                    title: "Summer",
                    id: "basic-nav-dropdown",
                    className: "white-color",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/summer-programs" : "/" + student_id + "/summer-programs",
                      className: "white-color",
                      children: "Programs"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 604,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/summer-plan" : "/" + student_id + "/summer-plan",
                      className: "white-color",
                      children: "Plan"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 614,
                      columnNumber: 21
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 599,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                    title: "Essay",
                    id: "basic-nav-dropdown",
                    className: "white-color",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/reading-list" : "/" + student_id + "/reading-list",
                      className: "white-color",
                      children: "Reading List"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 632,
                      columnNumber: 19
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/summer-school" : "/" + student_id + "/summer-school",
                      className: "white-color",
                      children: "Summer School"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 642,
                      columnNumber: 19
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/colleges" : "/" + student_id + "/colleges",
                      className: "white-color",
                      children: "Colleges"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 652,
                      columnNumber: 19
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 627,
                    columnNumber: 17
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/school-support" : "/" + student_id + "/school-support",
                    eventKey: "school-support",
                    className: "white-color",
                    children: "School Support"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 663,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/connections" : "/" + student_id + "/connections",
                    eventKey: "connections",
                    className: "white-color",
                    children: "Connections"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 676,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: !isAdvisor ? "/context" : "/" + student_id + "/context",
                    eventKey: "Context",
                    className: "white-color",
                    children: "Context"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 689,
                    columnNumber: 19
                  }, undefined), !isEditor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"], {
                    title: "Resources",
                    id: "basic-nav-dropdown",
                    className: "white-color",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/ngo-list" : "/" + student_id + "/ngo-list",
                      className: "white-color",
                      children: "NGO List"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 704,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/online-courses" : "/" + student_id + "/online-courses",
                      className: "white-color",
                      children: "Online Courses"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 712,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavDropdown"].Item, {
                      href: !isAdvisor ? "/financial-aid" : "/" + student_id + "/financial-aid",
                      className: "white-color",
                      children: "Financial Aid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 722,
                      columnNumber: 21
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 699,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: "https://www.collegepass.org/account",
                    eventKey: "My Account",
                    className: "white-color",
                    children: "My Account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 735,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"].Link, {
                    href: "#",
                    eventKey: "Logout",
                    className: "white-color",
                    id: "logoutButton",
                    onClick: handleShowLgout,
                    children: "Logout"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 742,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 495,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Modal_LogoutModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  show: show,
                  handleCloseLgout: handleCloseLgout,
                  handleShowLgout: handleShowLgout
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 752,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 494,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 5
    }, undefined)]
  }, void 0, true);
};

_s(Sidebar, "hOiDW3sbum9Rxjy9G/YkZmIGU3A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

}]);
//# sourceMappingURL=5.chunk.js.map