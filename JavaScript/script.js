$(document).ready(function () {
  var teamData = {
    type: "success",
    values: [
      {
        teamName: "Arizona Cardinals",
        pageName: "arizona.html",
        logo: "NFL Logos/Arizona.png",
        colors: ["red", "yellow", "black"],
      },
      {
        teamName: "Atlanta Falcons",
        pageName: "atlanta.html",
        logo: "NFL Logos/Atlanta.png",
        colors: ["red", "silver", "black"],
      },
      {
        teamName: "Baltimore Ravens",
        pageName: "baltimore.html",
        logo: "NFL Logos/Baltimore.png",
        colors: ["purple", "black", "gold"],
      },
      {
        teamName: "Buffalo Bills",
        pageName: "buffalo.html",
        logo: "NFL Logos/Buffalo.png",
        colors: ["red", "blue"],
      },
      {
        teamName: "Carolina Panthers",
        pageName: "carolina.html",
        logo: "NFL Logos/Carolina.png",
        colors: ["blue", "black", "silver"],
      },
      {
        teamName: "Chicago Bears",
        pageName: "chicago.html",
        logo: "NFL Logos/Chicago.png",
        colors: ["blue", "orange"],
      },
      {
        teamName: "Cincinatti Bengals",
        pageName: "cincinatti.html",
        logo: "NFL Logos/Cincinnati.png",
        colors: ["orange", "black"],
      },
      {
        teamName: "Cleveland Browns",
        pageName: "cleveland.html",
        logo: "NFL Logos/Cleveland.png",
        colors: ["orange", "brown"],
      },
      {
        teamName: "Dallas Cowboys",
        pageName: "dallas.html",
        logo: "NFL Logos/Dallas.png",
        colors: ["blue", "silver"],
      },
      {
        teamName: "Denver Broncos",
        pageName: "denver.html",
        logo: "NFL Logos/Denver.png",
        colors: ["orange", "blue"],
      },
      {
        teamName: "Detroit Lions",
        pageName: "detroit.html",
        logo: "NFL Logos/Detroit.png",
        colors: ["blue", "silver"],
      },
      {
        teamName: "Green Bay Packers",
        pageName: "green_bay.html",
        logo: "NFL Logos/Green_Bay.png",
        colors: ["green", "yellow"],
      },
      {
        teamName: "Indianapolis Colts",
        pageName: "indianapolis.html",
        logo: "NFL Logos/Indianapolis.png",
        colors: ["blue", "white"],
      },
      {
        teamName: "Jacksonville Jaguars",
        pageName: "jacksonville.html",
        logo: "NFL Logos/Jacksonville.png",
        colors: ["teal", "black", "gold"],
      },
      {
        teamName: "Kansas City Chiefs",
        pageName: "kansas_city.html",
        logo: "NFL Logos/Kansas_City.png",
        colors: ["red", "yellow"],
      },
      {
        teamName: "Los Angeles Chargers",
        pageName: "los_angeles_chargers.html",
        logo: "NFL Logos/San-Diego.png",
        colors: ["blue", "yellow"],
      },
      {
        teamName: "Los Angeles Rams",
        pageName: "los_angeles_rams.html",
        logo: "NFL Logos/Los_Angeles.png",
        colors: ["blue", "yellow"],
      },
      {
        teamName: "Miami Dolphins",
        pageName: "miami.html",
        logo: "NFL Logos/Miami.png",
        colors: ["blue", "orange", "turquoise"],
      },
      {
        teamName: "Minnesota Vikings",
        pageName: "minnesota.html",
        logo: "NFL Logos/Minnesota.png",
        colors: ["purple", "yellow"],
      },
      {
        teamName: "New England Patriots",
        pageName: "new_england.html",
        logo: "NFL Logos/New_England.png",
        colors: ["red", "blue", "silver"],
      },
      {
        teamName: "New Orleans Saints",
        pageName: "new_orleans.html",
        logo: "NFL Logos/New_Orleans.png",
        colors: ["gold", "black"],
      },
      {
        teamName: "New York Giants",
        pageName: "new_york_giants.html",
        logo: "NFL Logos/New_York.png",
        colors: ["red", "blue"],
      },
      {
        teamName: "New York Jets",
        pageName: "new_york_jets.html",
        logo: "NFL Logos/New_York_Jets.png",
        colors: ["green", "black", "white"],
      },
      {
        teamName: "Las Vegas Raiders",
        pageName: "oakland.html",
        logo: "NFL Logos/Oakland.png",
        colors: ["silver", "black"],
      },
      {
        teamName: "Philadelphia Eagles",
        pageName: "philadelphia.html",
        logo: "NFL Logos/Philadelphia.png",
        colors: ["green", "silver", "black"],
      },
      {
        teamName: "Pittsburgh Steelers",
        pageName: "pittsburgh.html",
        logo: "NFL Logos/Pittsburgh.png",
        colors: ["yellow", "black"],
      },
      {
        teamName: "San Francisco 49ers",
        pageName: "san_francisco.html",
        logo: "NFL Logos/San_Francisco.png",
        colors: ["red", "gold", "black"],
      },
      {
        teamName: "Seattle Seahawks",
        pageName: "seattle.html",
        logo: "NFL Logos/Seattle.png",
        colors: ["blue", "green", "silver"],
      },
      {
        teamName: "Tampa Bay Buccaneers",
        pageName: "tampa_bay.html",
        logo: "NFL Logos/Tampa_Bay.png",
        colors: ["orange", "black", "red"],
      },
      {
        teamName: "Tennessee Titans",
        pageName: "tennessee.html",
        logo: "NFL Logos/Tennessee.png",
        colors: ["red", "blue", "white"],
      },
      {
        teamName: "Washington Football Team",
        pageName: "washington.html",
        logo: "NFL Logos/Washington.png",
        colors: ["yellow", "burgandy"],
      },
    ],
  };

  const generateDropdown = (arr) => {
    let html = "";

    for (let i = 0; i < arr.length; i++) {
      html += `<li class="search-list-item"> <a href="${arr[i].pageName}"> <img id="team-image-dropdown" src="${arr[i].logo}""> <span id="team-name-dropdown">${arr[i].teamName}</span> </a> </li>`;
    }

    $(".search-list").html(html);
  };

  $(".search-form-input").on("input", () => {
    let filtered = [];
    let searchInput = $(".search-form-input").val();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let searchInputCap = capitalizeFirstLetter(searchInput);

    if (searchInputCap != "") {
      filtered = teamData.values.filter((a) => {
        return a.teamName.includes(searchInputCap);
      });

      if (filtered.length == 0) {
        filtered = teamData.values.filter((a) => {
          return a.colors.includes(searchInput);
        });
      }

      generateDropdown(filtered);
    } else {
      $(".search-list").html("");
    }
  });
});
