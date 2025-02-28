import { defineMessages } from '@edx/frontend-platform/i18n';

// eslint-disable-next-line import/prefer-default-export
export const messages = defineMessages({
  notificationHeading: {
    id: 'notification.preference.heading',
    defaultMessage: 'Notifications',
    description: 'Notification title',
  },
  notificationAppTitle: {
    id: 'notification.preference.app.title',
    defaultMessage: `{
        key, select,
        discussion {Discussions}
        coursework {Course Work}
        other {{key}}
    }`,
    description: 'Display text for Notification Types',
  },
  notificationTitle: {
    id: 'notification.preference.title',
    defaultMessage: `{
        text, select,
        core {Core}
        newPost {New Post}
        newComment {New Comment}
        newResponse {New Response}
        newCommentOnPost {New Comment On Post}
        newResponseOnComment {New Response On Comment}
        newAssignment {New Assignment}
        newGrade {New Grade}
        other {{text}}
    }`,
    description: 'Display text for Notification Types',
  },
  typeLabel: {
    id: 'notification.preference.type.label',
    defaultMessage: 'Type',
    description: 'Display text for type',
  },
  webLabel: {
    id: 'notification.preference.web,label',
    defaultMessage: 'Web',
    description: 'Display text for web',
  },
  notificationHelpEmail: {
    id: 'notification.preference.help.email',
    defaultMessage: 'Email',
    description: 'Display text for email',
  },
  notificationHelpPush: {
    id: 'notification.preference.help.push',
    defaultMessage: 'Push',
    description: 'Display text for push',
  },
  loadMoreCourses: {
    id: 'notification.preference.load.more.courses',
    defaultMessage: 'Load more courses',
    description: 'Load more button to load more courses',
  },
});
