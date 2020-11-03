const API_ENDPOINT = "https://my-json-server.typicode.com/SubashRandika/onyx_api/team";

const getTeamData = async () => {
	return await fetch(API_ENDPOINT).then((response) => response.json());
};

const createTeamCards = (data) => {
	const teamContainerDiv = document.querySelector(".team_container");

	data.map((member) => {
		const memberCardDiv = document.createElement("div");
		memberCardDiv.classList.add("member_card");
		memberCardDiv.setAttribute("id", member.id);

		memberCardDiv.innerHTML = `
                    <img class="profile_picture" src="${member.imageUrl}" alt="Profile" />
					<div class="inner">
						<h1 class="name">${member.name}</h1>
						<p class="designation">${member.designation}</p>
					</div>`;
		teamContainerDiv.appendChild(memberCardDiv);
	});
};

getTeamData().then((data) => createTeamCards(data));
