/* Sample Data: */
export const sampleData = {
      messages: [
        {
          id: 5,
          name: 'Pratik Patel',
          title: 'Campaign Admin',
          status: 'Online',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
          time: '10:42 PM'
        }, {
          id: 6,
          name: 'Winfield Stapforth',
          title: 'Developer',
          status: 'Online',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
          time: '11:17 AM'
        }, {
          id: 1,
          name: 'Boy',
          title: 'Developer',
          status: 'Offline',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          time: '5:17 AM'
        }, {
          id: 2,
          name: 'Jeff Galbraith',
          title: 'Project Manager',
          status: 'Offline',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
          time: '5:17 AM'
        }, {
          id: 3,
          name: 'Razvan Stoenescu',
          title: 'Sales Staff',
          status: 'Online',
          msg: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
          time: '5:17 AM'
        }
      ],

      conversations: [
        {
          id: 3,
          fromId: 3,
          toId: 99,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '1:51 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 4,
          fromId: 99,
          toId: 3,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '1:52 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 5,
          fromId: 3,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '1:55 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 6,
          fromId: 99,
          toId: 3,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '1:56 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 

        {
          id: 8,
          fromId: 99,
          toId: 1,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '2:37 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 9,
          fromId: 1,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '2:45 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 10,
          fromId: 99,
          toId: 1,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '2:48 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 11,
          fromId: 99,
          toId: 1,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '2:50 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 12,
          fromId: 1,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '2:51 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 

        {
          id: 14,
          fromId: 2,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '3:16 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 15,
          fromId: 99,
          toId: 2,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '3:18 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 16,
          fromId: 99,
          toId: 2,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '3:22 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 17,
          fromId: 99,
          toId: 2,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '3:32 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 18,
          fromId: 2,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '3:35 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 

        {
          id: 19,
          fromId: 5,
          toId: 99,
          message: ' -- I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '4:22 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 21,
          fromId: 99,
          toId: 5,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '4:25 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 22,
          fromId: 5,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '4:28 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 23,
          fromId: 99,
          toId: 5,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '4:30 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 24,
          fromId: 5,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '4:31 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 

        {
          id: 26,
          fromId: 99,
          toId: 6,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '5:47 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 28,
          fromId: 6,
          toId: 99,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '5:50 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 29,
          fromId: 6,
          toId: 99,
          message: ' -- Repeat: I\'ll be in your neighborhood doing errands this\n' +
              '            weekend. Do you want to grab brunch?',
          createDate: '5:55 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 
        {
          id: 30,
          fromId: 99,
          toId: 6,
          message: 'Lorem ipsum dolor sit amet, ',
          createDate: '5:56 PM Fri Nov 27 2020',
          when: '2 mins ago',
          metaData: 'Some meta data here'
        }, 

      ]
    }
