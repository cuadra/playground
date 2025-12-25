document.querySelector('button').addEventListener('click', () => {
  const gap = (start, end) => {
    return (end - start);
  }
  const table = document.querySelector('table tbody');
  const tableRow = (label, time) => {
    const row = document.createElement('tr');
    const html = `<td>${label}</td><td>${time}s</td>`;
    row.innerHTML = html;
    return row;
  }
  const iterations = 1000000;
  let arr = new Array();
  for (let i = 0; i < iterations; i++) {
    arr.push(i);
  }
  const process = (label, fn) => {
    const performance = window.performance;
    const start = performance.now();
    fn();
    console.log(label, gap(start, performance.now()), gap(start, performance.now()) / 1000)
    table.append(tableRow(label, gap(start, performance.now())));
  }

  process('For Loop', () => {
    for (let i = 0; i < iterations; i++) {
      //console.log(i);
    }
  });

  process('For Loop w/ passed cached variable', (iterations) => {
    for (let i = 0; i < iterations; i++) {
      //console.log(i);
    }
  });
  process('For Loop w/ passed hardcoded variable', (iterations2 = 1000000) => {
    for (let i = 0; i < iterations2; i++) {
      //console.log(i);
    }
  });
  process('While Loop', () => {
    let i = 0;
    while (i < iterations) {
      //console.log(i);
      i++;
    }
  });
  process('Do While Loop', () => {
    let i = 0;
    do {
      //console.log(i);
      i++;
    } while (i < iterations);
  });

  process('For In Loop', () => {
    for (i in arr) {
      //console.log(i);
    }
  });
  process('For Of Loop', () => {
    for (i of arr) {
      //console.log(i);
    }
  });
  process('Array Map', () => {
    Array.from({ length: arr }, (_, i) => {
      //console.log(i);
    });
  });
  process('Array ForEach', () => {
    Array.from({ length: arr }).forEach((_, i) => {
      //console.log(i);
    });
  });

  process('Array Reduce', () => {
    Array.from({ length: arr }).reduce((_, i) => {
      //console.log(i);
    }, 0);
  });
  process('Array Reduce w/ passed var', (arr) => {
    Array.from({ length: arr }).reduce((_, i) => {
      //console.log(i);
    }, 0);
  });
  process('Array Filter', () => {
    Array.from({ length: arr }).filter((_, i) => {
      //console.log(i);
    });
  });

  process('Array Find w/ passed var', (arr) => {
    Array.from({ length: arr }).find((_, i) => {
      //console.log(i);
    });
  });
  process('Array Find', () => {
    Array.from({ length: arr }).find((_, i) => {
      //console.log(i);
    });
  });
  process('Array Some', () => {
    Array.from({ length: arr }).some((_, i) => {
      //console.log(i);
    });
  });
  process('Array Every', () => {
    Array.from({ length: arr }).every((_, i) => {
      //console.log(i);
    });
  });
});


