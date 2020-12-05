/* Sample Data: */
export const sampleData = {
      messages: [
        {
          id: 5,
          name: 'Pratik Patel',
          title: 'Campaign Admin',
          status: 'Online',
          avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
          lastMsg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          lastMsgDate: '12 Nov 2020 12:25:27 GMT-0800'
        }, {
          id: 6,
          name: 'Winfield Stapforth',
          title: 'Developer',
          status: 'Online',
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          lastMsg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          lastMsgDate: '12 Oct 2020 10:55:27 GMT-0800'
        }, {
          id: 1,
          name: 'Boy',
          title: 'Developer',
          status: 'Offline',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          lastMsg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          lastMsgDate: '01 Dec 2020 11:46:27 GMT-0800'
        }, {
          id: 2,
          name: 'Jeff Galbraith',
          title: 'Project Manager',
          status: 'Offline',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          lastMsg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          lastMsgDate: '30 Nov 2020 15:35:27 GMT-0800'
        }, {
          id: 3,
          name: 'Razvan Stoenescu',
          title: 'Sales Staff',
          status: 'Online',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          lastMsg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          lastMsgDate: '02 Dec 2020 16:16:27 GMT-0800'
        }
      ],

      conversations: [
        {
          id: 3,
          fromId: 3,
          toId: 99,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '02 Dec 2020 16:16:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 4,
          fromId: 99,
          toId: 3,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '02 Dec 2020 16:06:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 5,
          fromId: 3,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '02 Dec 2020 16:03:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 6,
          fromId: 99,
          toId: 3,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '02 Dec 2020 15:55:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 

        {
          id: 8,
          fromId: 99,
          toId: 1,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '01 Dec 2020 11:46:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 9,
          fromId: 1,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '01 Dec 2020 11:40:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 10,
          fromId: 99,
          toId: 1,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '01 Dec 2020 11:33:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 11,
          fromId: 99,
          toId: 1,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '01 Dec 2020 11:30:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 12,
          fromId: 1,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '01 Dec 2020 11:24:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 

        {
          id: 14,
          fromId: 2,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '30 Nov 2020 15:35:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 15,
          fromId: 99,
          toId: 2,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '30 Nov 2020 15:32:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 16,
          fromId: 99,
          toId: 2,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '30 Nov 2020 15:25:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 17,
          fromId: 99,
          toId: 2,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '30 Nov 2020 15:24:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 18,
          fromId: 2,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '30 Nov 2020 15:21:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 

        {
          id: 19,
          fromId: 5,
          toId: 99,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '12 Nov 2020 12:25:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 21,
          fromId: 99,
          toId: 5,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Nov 2020 12:20:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 22,
          fromId: 5,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Nov 2020 12:18:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 23,
          fromId: 99,
          toId: 5,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Nov 2020 12:15:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 24,
          fromId: 5,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '12 Nov 2020 12:10:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 

        {
          id: 26,
          fromId: 99,
          toId: 6,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Oct 2020 10:55:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 28,
          fromId: 6,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Oct 2020 10:51:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 29,
          fromId: 6,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '12 Oct 2020 10:45:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 
        {
          id: 30,
          fromId: 99,
          toId: 6,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '12 Oct 2020 10:42:27 GMT-0800',
          metaData: 'Some meta data here'
        }, 

      ]
    }
