import { FunnelValue } from '@/utils/constants';
import { funnelAbTestLists } from '@/utils/firebase/abTestList';
import { getValue, RemoteConfig } from 'firebase/remote-config';

export const getValueByType = (
  remoteConfig: RemoteConfig,
  name: string,
  type: string,
  defaultValue: boolean | string | number
): boolean | string | number => {
  const config = getValue(remoteConfig, name);
  switch (type) {
    case 'boolean':
      return config.asBoolean();
    case 'number':
      return config.asNumber();
    case 'string':
    default:
      return config.asString() || defaultValue;
  }
};
export const getRemoteConfigDefaultValues = (funnelName: FunnelValue) => {
  const abTestList = funnelAbTestLists[funnelName];

  if (!abTestList) return {};

  return abTestList.reduce(
    (acc, { name, default: defaultValue, type }) => {
      acc[name] =
        type === 'boolean'
          ? Boolean(defaultValue)
          : type === 'number'
            ? Number(defaultValue)
            : defaultValue;

      return acc;
    },
    {} as Record<string, string | number | boolean>
  );
};
