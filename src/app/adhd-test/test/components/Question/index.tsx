import sanitizeHtml from 'sanitize-html';

import styles from '@/app/adhd-test/test/components/Question/Question.module.scss';

export default function Question({ question }) {
  return (
    <div className={styles.container}>
      <p
        dangerouslySetInnerHTML={{
          __html:
            sanitizeHtml(question, { allowedTags: ['br', 'span'] }) ??
            sanitizeHtml('', { allowedTags: [] }),
        }}
        className={styles.question}
      />
    </div>
  );
}
