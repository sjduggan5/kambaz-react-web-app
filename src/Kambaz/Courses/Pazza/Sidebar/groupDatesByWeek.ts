export default function groupPostsByDate(posts: any[]) {
  const now = new Date();
  const today = now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  const result = {
    Today: [] as any[],
    Yesterday: [] as any[],
    'Last Week': [] as any[],
  };

  const weekGroups = {} as any;

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

      const lastWeekStart = new Date(monday);
      lastWeekStart.setDate(monday.getDate() - 7);
      const lastWeekEnd = new Date(monday);
      lastWeekEnd.setDate(monday.getDate() - 1);

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
