(function (Vue){
	$('#projectDetails').hide();
	var projects = new Vue({
		el: "#projects",

		data: {
			title: '',
			description: '',
			image: '',
			imageLen: '',
			technologies: [],
			projects: [
				{
					title: 'CheckAPP',
					description: 'CheckApp is a website project with a hospital concept where the client can send messages to his/her specific doctor that was assigned.',
					image: 'checkapp',
					imageLen: 3,
					technologies: ["vue", "php", "mysql", "codeigniter",]
				},
				{
					title: 'Job Wizards',
					description: 'JobWizards is like any other job posting sites that allow employers to post jobs free and still reach a large audience effectively.',
					image: 'jobwiz',
					imageLen: 3,
					technologies: ["php", "mysql",]
				},
				{
					title: 'Online Flower Shop',
					description: 'An ecommerce website project for our "client" which has a flower shop. This allows the customers the ability to view and order their products online. The item will then be delivered to them.',
					image: 'eco',
					imageLen: 3,
					technologies: ["php", "mysql",]
				},
				{
					title: 'Job Alert',
					description: "Job Alert is a job posting site that allow employers to post jobs free and still reach a large audience effectively. It has a SMS feature where it alerts the audience through text message every time a job is posted. This was my one of my colleague's project that I helped to develop and my task was to improve its back-end logic and algorithm.",
					image: 'ojf',
					imageLen: 1,
					technologies: ["vue", "php", "mysql", "codeigniter",]
				}
			]
		},

		methods: {
			showDetails: function(id){

				this.title = this.projects[id].title;
				this.description = this.projects[id].description;
				this.image = this.projects[id].image;
				this.imageLen = this.projects[id].imageLen;
				this.technologies = this.projects[id].technologies;

				$('#projectRow').fadeOut(function(){
					$('#projectDetails').show().addClass('bounceIn');
				});
			},

			back: function(){
				$('#projectDetails').removeClass('bounceIn');
				$('#projectDetails').fadeOut(function(){
					$('#projectRow').fadeIn();
				});
			},
		}
	});

})(Vue);