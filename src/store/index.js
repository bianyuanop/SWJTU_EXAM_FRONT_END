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
        paperId: 1,
        describe: "Exam for class 1",
        start_time: new Date(2020, 5, 5, 10, 0, 0),
        duration: new Date(0, 0, 0, 2, 0, 0),
        allow: [
          "2019112256",
        ] 
      }
    ],
    testPapers: {
      1: {
          select: [1, 2],
          fill: [1,2],
          fix: [1],
          coding: [1]
      }
    },
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
    ],
    answerSheet: {
      1: {
        chan: {
          select: {
            1: "A",
            2: "A",
          },
          fix: {
            1: "A",
          },
          fill: {
            1: "PC",
            2: "MEM",
          },
          coding: {
            1: "print('Hello, world'",
          }
        }
      }
    },
    score: {
      1: {
        chan: {
          fix: {
            1: 20, 
          },
          coding: {
            1: 30, 
          },
          fill: {
            1: 100, 
            2: 50
          },
          select: {
            1: 100, 
            2: 50
          },
        }
      }
    }
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(
        {password: payload.password, username: payload.username, student_id: payload.student_id}
      )
      console.log(state.users);
    },
    addAdmin(state, payload) {
      state.users.push(
        {adminname: payload.adminname, password: payload.password}
      )
    },
    addAnswerSheet(state, payload) {
      if(state.answerSheet[payload.id] == undefined) state.answerSheet[payload.id] = {}
      console.log(state.username);
      state.answerSheet[payload.id][state.username] = payload.answerSheet;
      console.log(state.answerSheet);
    },
    adminLogin(state, payload) {
      state.admin_username = payload.username;
      state.admin_password = payload.password;
    },
    userLogin(state, payload) {
      state.username = payload.username;
      state.password = payload.password;
    }
  },
  actions: {
  },
  modules: {
  }
})
