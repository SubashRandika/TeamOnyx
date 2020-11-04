const API_ENDPOINT = "https://my-json-server.typicode.com/SubashRandika/onyx_api/team";

const getTeamData = async () => {
	return await fetch(API_ENDPOINT).then((response) => response.json());
};

const generateTeamTitle = (teamContainerDiv) => {
	const titleContainerDiv = document.createElement("div");
	titleContainerDiv.classList.add("member_card", "title_item");

	const titleBoxDiv = document.createElement("div");
	titleBoxDiv.classList.add("title_box");

	const title = document.createElement("h1");
	title.classList.add("title", "animate_typewriter");
	title.innerHTML = "Introducing Team Onyx";

	titleBoxDiv.appendChild(title);
	titleContainerDiv.appendChild(titleBoxDiv);
	teamContainerDiv.appendChild(titleContainerDiv);
};

const createTeamCards = (data) => {
	const teamContainerDiv = document.querySelector(".team_container");

	generateTeamTitle(teamContainerDiv);

	data.map((member) => {
		const memberCardDiv = document.createElement("div");
		memberCardDiv.classList.add("member_card");
		memberCardDiv.setAttribute("id", member.id);

		memberCardDiv.innerHTML = `
                    <img class="profile_picture" src="${member.imageUrl}" alt="Profile" width="140px" height="140px"/>
					<div class="inner">
						<h1 class="name">${member.name}</h1>
						<p class="designation">${member.designation}</p>
					</div>`;

		teamContainerDiv.appendChild(memberCardDiv);
	});
};

getTeamData().then((data) => createTeamCards(data));
