import { useEffect } from 'react';
import { Mixpanel } from 'mixpanel';

import Header from '@components/layout/Header/Header';
import VoteDetail from '@domains/community/topic/VoteDetail';
import Comment from '@domains/webtoon/detail/Comment';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};

interface Prop {
  id: number;
}

function TopicABVote({ id }: Prop) {
  useEffect(() => {
    Mixpanel.track('페이지 진입', {
      page: 'A/B 투표 상세 페이지',
      voteId: id,
    });
  }, [id]);

  return (
    <>
      <Header headerLeft="뒤로가기" headerRight="없음" />
      <VoteDetail id={Number(id)} />
      <Comment commentType={'topics'} id={Number(id)} />
    </>
  );
}

export default TopicABVote;
