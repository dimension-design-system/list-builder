const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Lorem ipsum",
      accountName: "Analysis Checking",
      accountNumber: "202049982",
      companyName: "Brown Bear of San Francisco, CA",
      currency: "USD",
      accountType: "SVB-US",
      selected: false,
    },
    "task-2": {
      id: "task-2",
      content: "dolor sit amet",
      accountName: "Analysis Checking",
      accountNumber: "202049982",
      companyName: "Brown Bear of San Francisco, CA",
      currency: "USD",
      accountType: "SVB-US",
      selected: false,
    },
    "task-3": {
      id: "task-3",
      content: "consectetur",
      accountName: "Analysis Checking",
      accountNumber: "202049982",
      companyName: "Brown Bear of San Francisco, CA",
      currency: "USD",
      accountType: "SVB-US",
      selected: false,
    },
    "task-4": {
      id: "task-4",
      content: "adipiscing",
      accountName: "Analysis Checking",
      accountNumber: "202049982",
      companyName: "Brown Bear of San Francisco, CA",
      currency: "USD",
      accountType: "SVB-US",
      selected: false,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Accounts",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
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
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
  // columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
