import {experimental_useEffectEvent as useEffectEvent, useEffect} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import type {SetPageInfo_PageInfoFragmentFragment} from '@/graphql/generated/graphql';

const SetPageInfo_PageInfoFragment = graphql(/* GraphQL */ `
  fragment SetPageInfo_PageInfoFragment on PageInfo {
    hasNextPage
    endCursor
    hasPreviousPage
    startCursor
  }
`);

export interface SetPageInfoProps {
  readonly pageInfo: FragmentType<typeof SetPageInfo_PageInfoFragment>;
  readonly onMount: (pageInfo: SetPageInfo_PageInfoFragmentFragment) => void;
}

export function SetPageInfo({pageInfo, onMount}: SetPageInfoProps) {
  const pageInfoData = getFragment(SetPageInfo_PageInfoFragment, pageInfo);

  const onMountStable = useEffectEvent(onMount);

  useEffect(() => {
    onMountStable(pageInfoData);
  }, [onMountStable, pageInfoData]);

  return undefined;
}
