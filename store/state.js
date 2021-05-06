const state =  {
	currentIndex: new Date().getMonth(),
	// 全局ID计数
	gid: 4,
	monthList: [
		{
			m_id: 1,
			month: 'Jan',
			monthDays: 31,
			desc: `If winter comes, can spring be far behind?`,
			icon: '',
			dailys: [
				{
					id: 1,
					title: '2021新年快乐！',
					content: 'RT',
					dailyDate: '2021-01-01',
					submitDate: new Date(),
					mood: 'happy',
					deleted: false,
				},
				{
					id: 2,
					title: '新的一年希望大家事事顺利！^-^',
					content: 'RT',
					dailyDate: '2021-01-01',
					submitDate: new Date(),
					mood: 'happy',
					deleted: false,
				}
			],
			colors: ['#373B44', '#4286f4'],
		}, 
		{
			m_id: 2,
			month: 'Feb',
			monthDays: 28,
			desc: `If winter comes, can spring be far behind?`,
			icon: '',
			dailys: [],
			colors: ['#373B44', '#4286f4']
		}, 
		{
			m_id: 3,
			month: 'Mar',
			monthDays: 31,
			desc: `Spring, the sweet spring, is the year's pleasant king`,
			icon: '',
			dailys: [],
			colors: ['#56ab2f', '#a8e063']
		}, 	
		{
			m_id: 4,
			month: 'Apr',
			monthDays: 30,
			desc: `Spring, the sweet spring, is the year's pleasant king`,
			icon: '',
			dailys: [],
			colors: ['#56ab2f', '#a8e063']
		}, 
		{
			m_id: 5,
			month: 'May',
			monthDays: 31,
			desc: `Spring, the sweet spring, is the year's pleasant king`,
			icon: '',
			dailys: [
				{
						id: 3,
						title: '劳动节开始放假！！',
						content: 'RT',
						dailyDate: '2021-05-01',
						submitDate: new Date(),
						mood: 'happy',
						deleted: false,
					},
				],
				colors: ['#56ab2f', '#a8e063']
		}, 
		{
			m_id: 6,
			month: 'Jun',
			monthDays: 30,
			desc: `Summer for three, grant I may be.`,
			icon: '',
			dailys: [],
			colors: ['#FF512F', '#F09819']
		}, 
		{
			m_id: 7,
			month: 'Jul',
			monthDays: 31,
			desc: `Summer for three, grant I may be.`,
			icon: '',
			dailys: [],
			colors: ['#FF512F', '#F09819']
		}, 
		{
			m_id: 8,
			month: 'Aug',
			monthDays: 30,
			desc: `Summer for three, grant I may be.`,
			icon: '',
			dailys: [],
			colors: ['#FF512F', '#F09819']
		}, 
		{
			m_id: 9,
			month: 'Sep',
			monthDays: 31,
			desc: `Autumn, seson of mists and mellow fruitfulness`,
			icon: '',
			dailys: [],
			colors: ['#799F0C', '#FFE000']
		},  
		{
			m_id: 10,
			month: 'Oct',
			monthDays: 30,
			desc: `Autumn, seson of mists and mellow fruitfulness`,
			icon: '',
			dailys: [],
			colors: ['#799F0C', '#FFE000']
		}, 
		{
			m_id: 11,
			month: 'Nov',
			monthDays: 31,
			desc: `Autumn, seson of mists and mellow fruitfulness`,
			icon: '',
			dailys: [],
			colors: ['#799F0C', '#FFE000']
		}, 
		{
			m_id: 12,
			month: 'Dec',
			monthDays: 30,
			desc: `If winter comes, can spring be far behind?`,
			icon: '',
			dailys: [],
			colors: ['#373B44', '#4286f4']
		}
	],
	
	unselect: null,
	selected: null,
	editing: null,
	// 心情选项
	moodList: [{
			name: 'Happy',
			disabled: false
		},
		{
			name: 'Sad',
			disabled: false
		}
	],

}

export default state
