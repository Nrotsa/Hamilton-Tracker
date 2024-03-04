const positionChart = document.getElementById("positionChart");
const qualiChart = document.getElementById("QualiChart");
new Chart(positionChart, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    datasets: [
      {
        label: "number of times he took a given place",
        data: [0, 9, 7, 6, 6, 5, 2, 3, 2, 1, 0, 0, 1],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        offset: true,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});
new Chart(qualiChart, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ],
    datasets: [
      {
        label: "number of times he took a given place",
        data: [1, 1, 5, 5, 9, 6, 6, 5, 9, 0, 2, 0, 3, 0, 0, 1],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        offset: true,
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});
