export default function groupPostsByDate(posts) {
  const now = new Date();
  const today = now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  const result = {
    Today: [],
    Yesterday: [],
    'Last Week': [],
  };

  const weekGroups = {};

  for (const post of posts) {
    const postDate = new Date(post.createDate);
    const postDateStr = postDate.toDateString();

    if (postDateStr === today) {
      result.Today.push(post);
    } else if (postDateStr === yesterdayStr) {
      result.Yesterday.push(post);
    } else {
      // Get Monday and Sunday of the post's week
      const postDay = postDate.getDay(); // 0 (Sun) to 6 (Sat)
      const sundayOffset = 7 - postDay; // Sunday = 0
      const mondayOffset = postDay - 1;

      const monday = new Date(postDate);
      monday.setDate(postDate.getDate() - mondayOffset);
      const sunday = new Date(postDate);
      sunday.setDate(postDate.getDate() + sundayOffset);

      const mondayStr = `${monday.getMonth() + 1}/${monday.getDate()}`;
      const sundayStr = `${sunday.getMonth() + 1}/${sunday.getDate()}`;
      const range = `WEEK ${mondayStr} - ${sundayStr}`;

      const currentWeekStart = new Date(monday);
      // currentWeekStart.setDate(now.getDate() - ((now.getDay() + 6) % 7));
      const lastWeekStart = new Date(currentWeekStart);
      lastWeekStart.setDate(currentWeekStart.getDate() - 7);
      const lastWeekEnd = new Date(currentWeekStart);
      lastWeekEnd.setDate(currentWeekStart.getDate() - 1);

      if (postDate >= lastWeekStart && postDate <= lastWeekEnd) {
        result['Last Week'].push(post);
      } else {
        if (!weekGroups[range]) {
          weekGroups[range] = [];
        }
        weekGroups[range].push(post);
      }
    }
  }

  // Merge in additional week groupings
  return { ...result, ...weekGroups };
}
