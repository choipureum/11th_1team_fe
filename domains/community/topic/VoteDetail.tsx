import ErrorBoundary from '@components/ErrorBoundary';
import Modal from '@components/modal/vote/Modal';
import { Vote } from '@_types/vote-type';
import { useState } from 'react';
import ABVote from './ABVote';
import ChoiceVote from './ChoiceVote';
import { VoteDetailWrapper } from './VoteDetail.style';

function VoteDetail({ id }: { id: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const { data, isLoading } = useGetVoteById(id);
  const data: Vote = {
    voteId: 1,
    voteCategory: 'ab',
    title: '이경우, 강효민 둘이 싸우면 누가 이길까?',
    tags: ['연애혁명', '소녀심판'],
    votingEndTime: '2022-06-30T14:00:45',
    voteItems: [
      {
        id: 1,
        content: '무조건 이 경우가 이긴다.',
        imageUrl:
          'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
      },
      {
        id: 2,
        content: '무조건 이 경우가 이긴다2.',
        imageUrl:
          'https://blog.kakaocdn.net/dn/bSAMGD/btqGbrklfgR/vuBgYTfwQP0Cq2ZW0G3ZXK/img.png',
      },
    ],
    joinCount: 12345,
    voteStatus: false,
  };

  return (
    <ErrorBoundary message="투표정보를 불러오지 못하고 있어요 😭😭😭">
      <VoteDetailWrapper>
        {data.voteCategory === 'ab' ? (
          <ABVote data={data} onOpen={() => setIsModalOpen(true)} />
        ) : (
          <ChoiceVote data={data} onOpen={() => setIsModalOpen(true)} />
        )}
        <Modal
          voteId={data.voteId}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </VoteDetailWrapper>
    </ErrorBoundary>
  );
}

export default VoteDetail;
