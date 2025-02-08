const backTopBtn = document.getElementById("backTop");
const mainMenu = document.getElementById("navBar");
const portfolio = [
	{
		id: 0,
		name: "RentWerx",
		media: [
			{
				id: 0,
				title: "RentWerx Property Management - Website Revamp: Home Page",
				url: "Media\RentWerx - 2024 Home.png"
			},
			{
				id: 1,
				title: "RentWerx Property Management - Website Revamp: Home Page (Mobile Version)",
				url: "Media\RentWerx - 2024 Home MOB.png"
			},
			{
				id: 2,
				title: "RentWerx Property Management - Website Revamp: About",
				url: "Media\RentWerx - About.png"
			},
			{
				id: 3,
				title: "RentWerx Property Management - Website Revamp: Virtual Tours",
				url: "Media\RentWerx - Virtual Tours.png"
			},
			{
				id: 4,
				title: "RentWerx Property Management - Website Revamp: Restricted Breeds (Mobile Version)",
				url: "Media\RentWerx - Restricted Breeds MOB.png"
			}
		]
	},
	{
		id: 1,
		name: "Front Porch",
		media: []
	},

	{
		id: 2,
		name: "RentWerx Mastermind",
		media: []
	},
];

window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.display = "block";
	mainMenu.classList.add("sticky");
	mainMenu.style.zIndex = "9999";
  } else {
    backTopBtn.style.display = "none";
	mainMenu.classList.remove("sticky");
  }
};

backTopBtn.addEventListener("click", () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

const tabsDisplay = (arr) => {
	arr.forEach((curr,_id) => {
		return `<div>
			<h3>${curr?.name}</h3>
			<p>${curr?.description}</p>
			<div class="carousel">${carousel(curr?.media)}</div>
		</div>`
	});
};