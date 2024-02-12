let isSidebarCollapsed = false;

function layoutChange() {
    let container = document.getElementsByClassName("container")[0];
    let appUpdate = document.getElementsByClassName("app-update")[0];
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let allSecHeading = document.querySelectorAll('.roles-selection-menu');
    let rolesSelectedMenu = document.getElementsByClassName("roles-selected-menu")[0];
    let roleManagementHeading = document.getElementsByClassName("role-management-dashboard-heading")[0];
    let allDashboardHeading = document.getElementsByClassName("all-dashboard-heading")[0];
    let logoImage = document.querySelector('.logo');
    let allIcons = document.querySelectorAll('.roles-selection-menu-icon');
    let allDashboardList = document.querySelector('.all-dashboard ul');
    let rolesManagementList = document.querySelector('.role-management-dashboard ul');
    let sidebarHandle = document.querySelector('.sidebar-handle');

    if (window.screen.width > 720) {
        container.style.gridTemplateColumns = isSidebarCollapsed ? "5em 1fr" : "18% 82%";
        appUpdate.style.display = isSidebarCollapsed ? "none" : "block";
        sidebar.style.width = isSidebarCollapsed ? "5em" : "18%";
        allDashboardList.style.marginLeft = isSidebarCollapsed ? "9%" : "0";
        allDashboardList.style.marginTop = isSidebarCollapsed ? "19%" : "0";
        rolesManagementList.style.marginLeft = isSidebarCollapsed ? "9%" : "0";
        console.log("secHeader", allSecHeading);

        allSecHeading.forEach((heading) => {
            let secHeader = heading.getElementsByTagName('span')[0];
            console.log("secHeader", secHeader);
            secHeader.style.display = isSidebarCollapsed ? "none" : "list-item";
        });

        rolesSelectedMenu.getElementsByTagName('span')[0].style.display = isSidebarCollapsed ? "none" : "inline";
        roleManagementHeading.style.display = isSidebarCollapsed ? "none" : "flex";
        allDashboardHeading.style.display = isSidebarCollapsed ? "none" : "flex";


        logoImage.src = isSidebarCollapsed ? "images/tezo-logo-icon.png" : "images/tezo-logo.svg";

        allIcons.forEach((icon) => {
            icon.style.display = isSidebarCollapsed ? "none" : "inline";
        });
        sidebarHandle.style.transform = isSidebarCollapsed ? "rotate(180deg)" : "rotate(0deg)"
        isSidebarCollapsed = !isSidebarCollapsed;


    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector('.sidebar-handle').addEventListener('click', layoutChange);
});
