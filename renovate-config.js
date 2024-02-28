module.exports = {
  branchPrefix: "renovate/",
  username: "renovate",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: false,
  platform: "github",
  configMigration: true,
  includeForks: true,
  repositories: ["wokoman/kazuma-vps", "wokoman/renovate"],
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
