import { createStore } from 'vuex'

export default createStore({
  state: {
    admin_username: null,
    admin_password: null,
    username: null,
    password: null,
    users: [
      {username: "chan", password: "diy.2002", student_id: "2019112256"}
    ],
    admins: [
      {adminname: "root", password: "root"} 
    ],
    exams: [
      {
        id: 1,
        describe: "Exam for class 1",
        start_time: new Date(2020, 5, 5, 10, 0, 0),
        duration: new Date(0, 0, 0, 2, 0, 0),
        allow: [
          "2019112256",
        ] 
      }
    ],
    testPapers: [
      {
        id: 1,
        select: [1, 2],
        fill: [1,2],
        fix: [1],
        coding: [1]
      }
    ],
    select: [
      {
        id: 1,
        describe: "What is bus?",
        options: {
          A: 1,
          B: 2,
          C: 3,
          D: 4
        },
        answer: 'A'
      },
      {
        id: 2,
        describe: "What is bus 2?",
        options: {
          A: 4,
          B: 1,
          C: 2,
          D: 3
        },
        answer: 'A'
      },
    ],
    fill: [
      {
        id: 1,
        describe: "What is memory?",
        answer: "MEMORY"
      },
      {
        id: 2,
        describe: "What is computer?",
        answer: "PC"
      }
    ],
    coding: [
      {
        id: 1,
        describe: "Design a counter from 1 to 10",
        answer: "1 2 3 4 5 6 7 8 9 10\n"
      }
    ],
    fix: [
      {
        id: 1, 
        describe: "following code have something wrong, please fix it",
        codePiece:"#include <iostream>\n\
        using namespace std;\n\
        int main() {\n\
          cout << \"Hello, world\" << endl\n\
          return 0;\n\
        }\n"
      }
    ]
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(
        {password: payload.password, username: payload.username, student_id: payload.student_id}
      )
    },
    addAdmin(state, payload) {
      state.users.push(
        {adminname: payload.adminname, password: payload.password}
      )
    }
  },
  actions: {
  },
  modules: {
  }
})
