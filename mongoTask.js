
// 1) ������ ��� ���� � ���� ������ ������ 4.2
// 2) ������ ��� ���� � 1 �����
// 3) ������ ��� ���� �� �������� ������
// 4) ������ ��� ����, ������ ���� �������� � ����� ( scientist )
// 5) ������ ����, � ���� ������� ������ ����� �� 4
// 6) ������ ���������� ����
// 7) ������ ��������� ����
// 8) ������ ��� 3 ����
// 9) ������ ������� ��� �� ����
// 10) ������ ������� ��� ���� �� �������� ���������� ��� ������
// 11) ������ ������� ��� �� 2 ����
// 12) ������ ���� � �� ������ ���
// 13) ������ ������ �� �� ��������
// 14) �� ��������� ������ ���������� �����������
// 15) ������� ����, �� ����� ������� ��� ����� �� 2.5
// 16) ĳ���, ������ ���� �������� � ���� ( teacher ) ��������� 5
// 17) ������ ���� �� ������� � ��������� ���� (�� 5 �����) � �������� ������ ( physics )
// 18) ������ ����������� ����

// Solving
// db.getCollection('users').find({"avgScore": 4.2})
// db.getCollection('users').find({"class":1})
// db.getCollection('users').find({lessons: 'english'})
// db.getCollection('users').find({ 'parents.profession': { $in: ['scientist'] } })
// db.getCollection('users').find().sort({"avgScore": -1 }).limit(1) Max
// db.getCollection('users').find({"avgScore": { $gte: 4}})

// db.getCollection('users').aggregate([
//     {
//         $group: {
//             _id: null,
//             maxScore: {$max: "$avgScore"}
//         }
//     }
// ])
  
// db.getCollection('users').aggregate([
//     {
//         $group: {
//             _id: null,
//             minScore: {$min: "$avgScore"}
//         }
//     }
//  ])

// db.getCollection('users').find().sort({"avgScore":-1}).limit(3)
// 







