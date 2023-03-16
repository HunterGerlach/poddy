# Poddy Assistant Browser Extension

Poddy Assistant is a fun and interactive browser extension designed to display the Poddy character in the bottom right corner of the OpenShift web console. Poddy is a delightful, AI-powered companion that aims to make the OpenShift experience more enjoyable and engaging.

Note: Poddy is not officially affiliated with Red Hat, Inc. or OpenShift.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [License](#license)

## Features

- Displays Poddy, a charming pod-shaped character, on OpenShift web console pages.
- Positions Poddy in the bottom right corner of the screen.
- Compatible with Google Chrome and Mozilla Firefox.

## Installation

### Google Chrome

1. Download the latest release of the Poddy Assistant browser extension as a ZIP file from the repository.
2. Unzip the downloaded file to a location of your choice.
3. Navigate to chrome://extensions in your browser.
4. Enable "Developer mode" in the top right corner.
5. Click "Load unpacked" and select the unzipped extension directory.

### Mozilla Firefox

1. Download the latest release of the Poddy Assistant browser extension as a ZIP file from the repository.
2. Unzip the downloaded file to a location of your choice.
3. Navigate to about:debugging in your browser.
4. Click "This Firefox" in the left sidebar.
5. Click "Load Temporary Add-on" and select the manifest.json file in the unzipped extension directory.

## Usage

Once installed, Poddy will automatically appear in the bottom right corner of any OpenShift web console page. Simply navigate to your OpenShift web console, and Poddy will be there to brighten your container orchestration experience.

## Adding Custom Private Cluster URLs

If you're using Poddy Assistant with your own private OpenShift cluster and its URL is not currently listed in the extension's manifest, you can add it by following these steps:

1. Open the `manifest.json` file in the extension's directory.

2. Locate the `content_scripts` section, which should look like this:

```json
"content_scripts": [
  {
    "matches": [
      "https://*.openshift.com/*",
      "https://*.openshift.redhat.com/*"
      // ... other URLs
    ],
    "js": ["contentScript.js"],
    "run_at": "document_idle"
  }
],
```

3. Add your private cluster's URL pattern to the matches array. Make sure to include the protocol (http:// or https://) and any necessary wildcards.

For example, if your private cluster's URL is https://mycluster.example.com, add this pattern to the matches array:

```json
"https://mycluster.example.com/*"
```

If your private cluster uses a wildcard subdomain, you can use a wildcard pattern like this:

```json
"https://*.example.com/*"
```

4. After adding your cluster's URL pattern, the updated content_scripts section should look like this:

```json
"content_scripts": [
  {
    "matches": [
      "https://*.openshift.com/*",
      "https://*.openshift.redhat.com/*",
      "https://mycluster.example.com/*"
      // ... other URLs
    ],
    "js": ["contentScript.js"],
    "run_at": "document_idle"
  }
],
```

5. Save the changes to the manifest.json file and reload the extension in your browser. Poddy Assistant should now work with your private OpenShift cluster.

> Note: Be cautious when using wildcards, as they can grant the extension access to more sites than necessary. Always try to be as specific as possible when defining URL patterns to limit the extension's scope and maintain security.

## Contribution

Contributions are always welcome! To contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear and concise commit messages.
4. Create a pull request describing the changes you made.
5. Wait for a maintainer to review and merge your changes.

## License

This project is licensed under the MIT License. For more information, please see the [LICENSE](LICENSE) file.
