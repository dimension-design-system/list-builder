const initialData = {
  isDragging: false,
  tasks: {
    "task-1": {
      id: "task-1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod tristique nisl, ut malesuada ligula varius eu. Quisque ac hendrerit orci, nec bibendum libero.",
      accountName: "Analysis Checking",
      accountNumber: "202049982",
      companyName: "Brown Bear of San Francisco, CA",
      currency: "USD",
      accountType: "SVB-US",
      selected: false,
    },
    "task-2": {
      id: "task-2",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.",
      accountName: "Savings Account",
      accountNumber: "202049983",
      companyName: "Red Fox of New York, NY",
      currency: "EUR",
      accountType: "Chase",
      selected: false,
    },
    "task-3": {
      id: "task-3",
      content:
        "Nulla facilisi. Nulla facilisi. Proin at ultrices nisl. Integer sollicitudin velit non tincidunt elementum.",
      accountName: "Checking Account",
      accountNumber: "202049984",
      companyName: "Yellow Canary of Los Angeles, CA",
      currency: "GBP",
      accountType: "Wells Fargo",
      selected: false,
    },
    "task-4": {
      id: "task-4",
      content:
        "Donec vitae sapien nec mi varius sollicitudin. Vestibulum vitae tellus eu justo vulputate auctor. Nunc a nibh ut urna tempor sollicitudin eu id nisi.",
      accountName: "Money Market",
      accountNumber: "202049985",
      companyName: "Green Frog of Chicago, IL",
      currency: "JPY",
      accountType: "Bank of America",
      selected: false,
    },
    "task-5": {
      id: "task-5",
      content:
        "Aliquam vitae odio vitae lacus aliquam convallis. Vivamus auctor euismod orci a venenatis. Morbi in sapien eget orci tristique mollis.",
      accountName: "Certificate of Deposit",
      accountNumber: "202049986",
      companyName: "Blue Whale of Seattle, WA",
      currency: "AUD",
      accountType: "Citibank",
      selected: false,
    },
    "task-6": {
      id: "task-6",
      content:
        "Vivamus venenatis justo eu nunc interdum, a rhoncus mi laoreet. Sed nec urna ut risus malesuada finibus ut ut tellus.",
      accountName: "IRA Account",
      accountNumber: "202049987",
      companyName: "Orange Tiger of Miami, FL",
      currency: "CAD",
      accountType: "TD Bank",
      selected: false,
    },
    "task-7": {
      id: "task-7",
      content:
        "Ut malesuada elit ut arcu congue, a congue nulla scelerisque. Nam ac consequat nisi. In consequat ligula sed metus venenatis, ut mollis nulla malesuada.",
      accountName: "Home Equity Line of Credit",
      accountNumber: "202049988",
      companyName: "Purple Elephant of Denver, CO",
      currency: "CHF",
      accountType: "PNC Bank",
      selected: false,
    },
    "task-8": {
      id: "task-8",
      content:
        "Phasellus interdum, libero ut congue condimentum, eros urna laoreet dui, nec lacinia urna erat ac quam. Aliquam erat volutpat.",
      accountName: "Auto Loan",
      accountNumber: "202049989",
      companyName: "Black Panther of Houston, TX",
      currency: "CNY",
      accountType: "US Bank",
      selected: false,
    },
    "task-9": {
      id: "task-9",
      content:
        "Maecenas at arcu vitae libero commodo egestas. Sed imperdiet sapien vel mauris vestibulum, et laoreet odio euismod.",
      accountName: "Personal Loan",
      accountNumber: "202049990",
      companyName: "White Dove of Boston, MA",
      currency: "DKK",
      accountType: "Regions Bank",
      selected: false,
    },
    "task-10": {
      id: "task-10",
      content:
        "Curabitur lobortis justo non odio fermentum, a interdum elit porttitor. Vivamus vestibulum nisl a dui lacinia, id convallis dolor tristique.",
      accountName: "Credit Card",
      accountNumber: "202049991",
      companyName: "Gray Wolf of San Diego, CA",
      currency: "HKD",
      accountType: "BB&T",
      selected: false,
    },
    "task-11": {
      id: "task-11",
      content:
        "Mauris vitae arcu a felis malesuada euismod. Integer eget urna quis elit sagittis fermentum a nec arcu.",
      accountName: "Student Loan",
      accountNumber: "202049992",
      companyName: "Pink Flamingo of Atlanta, GA",
      currency: "INR",
      accountType: "SunTrust",
      selected: false,
    },
    "task-12": {
      id: "task-12",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat.",
      accountName: "Investment Account",
      accountNumber: "202049993",
      companyName: "Golden Eagle of Philadelphia, PA",
      currency: "KRW",
      accountType: "KeyBank",
      selected: false,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Accounts",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
        "task-10",
        "task-11",
        "task-12",
      ],
    },
    "column-2": {
      id: "column-2",
      title: "Generic Group",
      taskIds: [],
    },
    // "column-3": {
    //   id: "column-3",
    //   title: "Done",
    //   taskIds: [],
    // },
  },
  columnOrder: ["column-1", "column-2"],
  // columnOrder: ["column-1", "column-2", "column-3
};

export default initialData;
