import { useGetCommentsById } from '@apis/comments';

import {
  CommentListWrap,
  Title,
  CommentWrap,
  MainWrap,
  UserInfo,
  Name,
  TimeStamp,
  Content,
  FavoriteWrap,
  Favorite,
} from './Comment.style';

import UserProfile from '@components/image/UserProfile';
import FavoriteBtn from '@components/button/FavoriteBtn';
import CommentTextInput from '@components/detail/commentTextInput/CommentTextInput';
import OnError from '@components/OnError';
import ErrorBoundary from '@components/ErrorBoundary';

import { IComment } from '@_types/comments-type';
import { useEffect, useState } from 'react';

function Comment({ id }: { id: number }) {
  const { data: t, isError } = useGetCommentsById(id);
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (t) setComments(t.data);
  }, [t, comments]);

  if (isError) return <OnError>댓글을 불러오지 못하고 있어요 😭😭😭</OnError>;

  return (
    <ErrorBoundary message="댓글을 불러오지 못하고 있어요 😭😭😭">
      <CommentListWrap>
        <Title>개미들의 행진 {comments?.length}</Title>
        <CommentTextInput length={comments?.length} webtoonId={id} />
        {comments &&
          comments?.map((comment: IComment) => {
            return (
              <CommentWrap key={comment.discussionId}>
                <UserProfile src={comment.imageUrl} width="32" height="32" />
                <MainWrap>
                  <UserInfo>
                    <Name>{comment.nickname}</Name>
                    <TimeStamp>몇 분 전일까요?</TimeStamp>
                  </UserInfo>
                  <Content>{comment.content}</Content>
                  <FavoriteWrap>
                    <FavoriteBtn isFavoriteChecked={comment.isUserLike} />
                    <Favorite>{comment.likeCount}</Favorite>
                  </FavoriteWrap>
                </MainWrap>
              </CommentWrap>
            );
          })}
      </CommentListWrap>
    </ErrorBoundary>
  );
}

export default Comment;
