$(document).ready(function () {
	// PAGE ONE START
	new Splide("#splide", {
		type: "loop",
		perPage: 3,
		perMove: 1,
		pagination: false,
		breakpoints: {
			1200: {
				perPage: 4,
			},
		},
		breakpoints: {
			920: {
				perPage: 3,
			},
		},
		breakpoints: {
			668: {
				perPage: 2,
			},
		},
		breakpoints: {
			575: {
				perPage: 3,
			},
		},
		breakpoints: {
			500: {
				perPage: 2,
			},
		},
	}).mount();

	$.each([1, 1, 1, 1], function (key, value) {
		$("#listData, #listData2, #listData3, #listData4, #listData5").append(`
                                                                <div
                                    class="
                                        col-12
                                        ps-0
                                        boxCont
                                        listCardCont
                                        d-flex
                                        align-items-center
                                        mt-3
                                    "
                                >
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1598346763242-7fbe5769efd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="ms-4 py-2">
                                        <h6 class="mb-1 mb-0 h5">Margueirta</h6>
                                        <p class="small mb-0 text-secondary mt-1">
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Dolore Lorem ipsum dolor sit amet.
                                        </p>
                                        <div class="d-flex align-items-baseline mt-1">
                                        <h6 class="fw-bold mb-0">Starting from</h6>
                                            <h6 class="price h4 mb-0 fw-bold ms-2">??? 10.00</h6>
                                        </div>
                                    </div>
                                </div>
`);
	});
});

// FOR LISTING SHOW AND HIDE START
var services = document.querySelector("#services");
services.addEventListener("click", function (e) {
	var target = e.target;
	console.log(target.classList.contains("toggleHead") || "lol");
	if (target.classList.contains("toggleHead")) {
		var serviceItem = target.parentNode;
		var open = target.dataset.open === "true";
		target.dataset.open = !open;
		const innerTextData = serviceItem.children[0].children[1];
		const innerTextData2 = serviceItem.children[1];
		if (open) {
			innerTextData2.style.display = "none";
			serviceItem.style.overflowX = "hidden";
			innerTextData.classList.remove("fa-chevron-down");
			innerTextData.classList.add("fa-chevron-up");
		} else {
			innerTextData2.style.display = "block";
			serviceItem.style.height = "100%";
			serviceItem.style.overflowX = "inherit";
			innerTextData.classList.remove("fa-chevron-up");
			innerTextData.classList.add("fa-chevron-down");
		}
	}
});

// PAGE ONE START
// FOR LISTING SHOW AND HIDE END

// HAMBERGER START GLOBAL
const sidebar = document.getElementById("sideBarId");
document.getElementById("hambergerBtn").addEventListener("click", () => {
	sidebar.style.display = "block";
	sidebar.style.opacity = "1";
	sidebar.style.top = "0%";
	sidebar.style.left = "0%";
	sidebar.style.transform = "none";
});

const closeSidebar = () => {
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
};
// HAMBERGER END GLOBAL

// CATEGORY MENU START
nav1.addEventListener("click", () => {
	nav1.classList.add("active");
	nav2.classList.remove("active");
	nav3.classList.remove("active");
	nav4.classList.remove("active");
	nav5.classList.remove("active");
});

nav2.addEventListener("click", () => {
	nav2.classList.add("active");
	nav1.classList.remove("active");
	nav3.classList.remove("active");
	nav4.classList.remove("active");
	nav5.classList.remove("active");
});

// SIDEBAR CATEGORY MENU START
sNav1.addEventListener("click", () => {
	sNav1.classList.add("active");
	sNav2.classList.remove("active");
	sNav3.classList.remove("active");
	sNav4.classList.remove("active");
	sNav5.classList.remove("active");
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
});

sNav2.addEventListener("click", () => {
	sNav2.classList.add("active");
	sNav1.classList.remove("active");
	sNav3.classList.remove("active");
	sNav4.classList.remove("active");
	sNav5.classList.remove("active");
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
});

sNav3.addEventListener("click", () => {
	sNav3.classList.add("active");
	sNav1.classList.remove("active");
	sNav2.classList.remove("active");
	sNav4.classList.remove("active");
	sNav5.classList.remove("active");
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
});

sNav4.addEventListener("click", () => {
	sNav4.classList.add("active");
	sNav1.classList.remove("active");
	sNav2.classList.remove("active");
	sNav3.classList.remove("active");
	sNav5.classList.remove("active");
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
});

sNav5.addEventListener("click", () => {
	sNav5.classList.add("active");
	sNav1.classList.remove("active");
	sNav2.classList.remove("active");
	sNav3.classList.remove("active");
	sNav4.classList.remove("active");
	sidebar.style.display = "none";
	sidebar.style.opacity = "0";
	sidebar.style.transition = "1s all";
});
// SIDEBAR CATEGORY MENU END
