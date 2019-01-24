export const UPDATE_ANNOUNCEMENT = "[Announcementc] update";

export const updateAnnouncement = (message: string) => {
  return {type: UPDATE_ANNOUNCEMENT, message };
};
