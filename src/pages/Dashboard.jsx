import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [hasError, setHasError] = useState(false);
  const [contributions, setContributions] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    thisWeek: 0,
    best: 0,
    average: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      try {
        // First fetch: Get contribution data
        const contributionResponse = await fetch(
          `https://github-contributions-api.jogruber.de/v4/asadmahmud22?y=last`
        );

        if (!contributionResponse.ok) {
          throw new Error("Failed to fetch contribution data");
        }

        const contributionData = await contributionResponse.json();

        // Process the contribution data
        const processedContributions = [];
        let totalContributions = 0;
        let maxDailyContributions = 0;
        const currentWeekContributions = { count: 0 };

        // Flatten the contributions data
        contributionData.contributions.forEach((week) => {
          week.days.forEach((day) => {
            const level =
              day.contributionCount === 0
                ? 0
                : day.contributionCount <= 1
                ? 1
                : day.contributionCount <= 2
                ? 2
                : day.contributionCount <= 3
                ? 3
                : 4;

            processedContributions.push({
              date: day.date,
              count: day.contributionCount,
              level: level,
            });

            totalContributions += day.contributionCount;

            if (day.contributionCount > maxDailyContributions) {
              maxDailyContributions = day.contributionCount;
            }

            // Check if this is part of the current week
            const dayDate = new Date(day.date);
            const today = new Date();
            const oneWeekAgo = new Date(
              today.getTime() - 7 * 24 * 60 * 60 * 1000
            );

            if (dayDate >= oneWeekAgo && dayDate <= today) {
              currentWeekContributions.count += day.contributionCount;
            }
          });
        });

        // Calculate average
        const average =
          Math.round(
            (totalContributions / processedContributions.length) * 10
          ) / 10;

        setContributions(processedContributions);
        setStats({
          total: totalContributions,
          thisWeek: currentWeekContributions.count,
          best: maxDailyContributions,
          average: average,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchGitHubContributions();
  }, []);

  const getColorClass = (level) => {
    switch (level) {
      case 0:
        return "bg-gray-800";
      case 1:
        return "bg-green-900";
      case 2:
        return "bg-green-700";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-green-400";
      default:
        return "bg-gray-800";
    }
  };

  // Group contributions by week for display
  const weeks = [];
  if (contributions.length > 0) {
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
  }

  return (
    <div className="resize-x max-w-6xl min-h-screen bg-black text-white overflow-y-hidden">
      {/* Main Content */}
      <div className="px-3 md:px-1 lg:px-1 py-1 md:py-1 lg:py-1 max-w-4xl overflow-y-hidden mx-auto">
        {/* Dashboard Title */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1">
            Dashboard
          </h1>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            Built with Next.js API routes deployed as serverless functions.
          </p>
        </div>

        {/* GitHub Contributions Section */}
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-md md:rounded-xl border border-gray-800 p-3 md:p-6 lg:p-8">
          {/* Section Header */}
          <div className="mb-3 md:mb-6">
            <div className="flex items-center gap-1.5 mb-1">
              <svg
                className="w-3 h-3 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
                Contributions
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              My contributions from last year on GitHub.
            </p>
            <p className="text-xs text-gray-500 mt-0.5">@asadmahmud22</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
            <div className="bg-gray-800 bg-opacity-50 rounded border border-gray-700 p-2 md:p-4 text-center">
              {isLoading ? (
                <div className="animate-pulse h-6 md:h-8 bg-gray-700 rounded"></div>
              ) : (
                <p className="text-green-400 text-base md:text-xl lg:text-2xl font-bold">
                  {stats.total}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">Total</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded border border-gray-700 p-2 md:p-4 text-center">
              {isLoading ? (
                <div className="animate-pulse h-6 md:h-8 bg-gray-700 rounded"></div>
              ) : (
                <p className="text-green-400 text-base md:text-xl lg:text-2xl font-bold">
                  {stats.thisWeek}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">This week</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded border border-gray-700 p-2 md:p-4 text-center">
              {isLoading ? (
                <div className="animate-pulse h-6 md:h-8 bg-gray-700 rounded"></div>
              ) : (
                <p className="text-green-400 text-base md:text-xl lg:text-2xl font-bold">
                  {stats.best}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">Best</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded border border-gray-700 p-2 md:p-4 text-center">
              {isLoading ? (
                <div className="animate-pulse h-6 md:h-8 bg-gray-700 rounded"></div>
              ) : (
                <p className="text-green-400 text-base md:text-xl lg:text-2xl font-bold">
                  {stats.average}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-0.5">Avg</p>
            </div>
          </div>

          {/* GitHub Contribution Grid */}
          <div className="relative">
            {/* Month Labels */}
            <div className="hidden md:flex justify-between text-xs text-gray-500 mb-2 px-2">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, index) => (
                <span
                  key={month}
                  className={index % 2 === 0 ? "" : "hidden lg:inline"}
                >
                  {month}
                </span>
              ))}
            </div>

            {/* Mobile Month Labels */}
            <div className="flex md:hidden justify-between text-xs text-gray-500 mb-1 px-0.5">
              {["J", "M", "M", "J", "S", "N"].map((month, index) => (
                <span key={index}>{month}</span>
              ))}
            </div>

            {/* Contribution Grid */}
            <div className="overflow-x-auto">
              {isLoading ? (
                <div
                  className="grid grid-rows-7 gap-0.5 md:gap-2 animate-pulse"
                  style={{
                    gridTemplateColumns: "repeat(53, 1fr)",
                    minWidth: "260px",
                    height: "112px",
                  }}
                >
                  {Array.from({ length: 371 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-1.5 h-1.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-sm bg-gray-800"
                    />
                  ))}
                </div>
              ) : hasError ? (
                <div className="text-center py-8 text-gray-500">
                  Failed to load contribution data. Please try again later.
                </div>
              ) : (
                <div
                  className="grid grid-rows-7 gap-0.5 md:gap-2"
                  style={{
                    gridTemplateColumns: "repeat(53, 1fr)",
                    minWidth: "260px",
                  }}
                >
                  {contributions.slice(0, 371).map((contribution, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-sm ${getColorClass(
                        contribution.level
                      )} hover:ring-1 hover:ring-green-400 transition-all duration-200`}
                      title={`${contribution.count} contributions on ${contribution.date}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span className="text-xs">{stats.total} contributions</span>
              <div className="flex items-center gap-1">
                <span className="text-xs">Less</span>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-sm ${getColorClass(
                        level
                      )}`}
                    />
                  ))}
                </div>
                <span className="text-xs">More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Mobile-Friendly Cards */}
        <div className="mt-1 md:mt-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3">
          {/* Recent Activity Card */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-">
            <h3 className="text-sm md:text-base font-semibold mb-3 text-green-400">
              Recent Activity
            </h3>
            <div className="space-y-2">
              <div className="text-xs md:text-sm text-gray-300">
                <span className="text-gray-500">2 hours ago</span> - Committed
                to project-name
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                <span className="text-gray-500">1 day ago</span> - Merged pull
                request
              </div>
              <div className="text-xs md:text-sm text-gray-300">
                <span className="text-gray-500">3 days ago</span> - Created new
                repository
              </div>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold mb-3 text-blue-400">
              Quick Stats
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-400">Repositories</span>
                <span className="text-white font-medium">42</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-400">Stars Earned</span>
                <span className="text-white font-medium">156</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-400">Followers</span>
                <span className="text-white font-medium">89</span>
              </div>
            </div>
          </div>

          {/* Language Stats Card */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm md:text-base font-semibold mb-3 text-purple-400">
              Top Languages
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-gray-400">45%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-yellow-400 h-1.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-gray-300">Php</span>
                  <span className="text-gray-400">30%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-blue-400 h-1.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-gray-300">React</span>
                  <span className="text-gray-400">25%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-cyan-400 h-1.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
