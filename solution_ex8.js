const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

// Nghiệp vụ 1: Xe cắm sạc vào trụ S01 -> chuyển trạng thái sang 'CHARGING'
const indexS01 = portIds.indexOf('S01');
if (indexS01 !== -1) {
  portStatuses[indexS01] = 'CHARGING';
}

// Nghiệp vụ 2: Trụ S03 bảo trì xong -> chuyển trạng thái sang 'AVAILABLE'
const indexS03 = portIds.indexOf('S03');
if (indexS03 !== -1) {
  portStatuses[indexS03] = 'AVAILABLE';
}

let availableCount = 0;
let maxAvailablePower = -1;
let bestPortId = null;

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === 'AVAILABLE') {
    availableCount++;

    // Tìm trụ sẵn sàng có công suất lớn nhất
    if (portPowersKw[i] > maxAvailablePower) {
      maxAvailablePower = portPowersKw[i];
      bestPortId = portIds[i];
    }
  }
}

console.log('=== BÁO CÁO VẬN HÀNH TRẠM SẠC VINFAST ===');
console.log('Chi tiết từng trụ:');

for (let i = 0; i < portIds.length; i++) {
  console.log(`- Trụ ${portIds[i]}: Trạng thái = ${portStatuses[i]} | Công suất = ${portPowersKw[i]} kW`);
}

console.log('-----------------------------------------');
console.log(`Tổng số trụ đang sẵn sàng (AVAILABLE): ${availableCount}`);

if (bestPortId !== null) {
  console.log(`Trụ sạc sẵn sàng có công suất cao nhất: ${bestPortId} (${maxAvailablePower} kW)`);
} else {
  console.log('Hiện không có trụ nào ở trạng thái AVAILABLE.');
}