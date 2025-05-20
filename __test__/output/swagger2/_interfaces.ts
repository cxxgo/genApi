export interface AddBirdResp {
  /** 是否直接入鸟窝 */
  directEntryBird?: boolean
  /** 鸟窝id */
  imBirdId?: string
}
export interface aliyunSTSJianQuanFanHuiZhi {
  /** accessKey */
  accessKeyIdSts?: string
  /** secretKey */
  secretKeyIdSts?: string
  /** securityToken */
  securityToken?: string
}
export interface ApiResponse {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseAddBirdResp {
  code?: number
  data?: AddBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsealiyunSTSJianQuanFanHuiZhi {
  code?: number
  data?: aliyunSTSJianQuanFanHuiZhi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseAtListAndAckSequenceResp {
  code?: number
  data?: AtListAndAckSequenceResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseBanBen {
  code?: number
  data?: BanBen
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseboolean {
  code?: number
  data?: boolean
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageCommonSearchResp {
  code?: number
  data?: ComPageCommonSearchResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageContactResp {
  code?: number
  data?: ComPageContactResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp {
  code?: number
  data?: ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageFriendshipResp {
  code?: number
  data?: ComPageFriendshipResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageKeyBorardBlackResp {
  code?: number
  data?: ComPageKeyBorardBlackResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageNiaoWoDuiXiangBirdResp {
  code?: number
  data?: ComPageNiaoWoDuiXiangBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageSearchBeforeAddFriendResp {
  code?: number
  data?: ComPageSearchBeforeAddFriendResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageWaiBuShuiDaoXiangYing {
  code?: number
  data?: ComPageWaiBuShuiDaoXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageWaiBuZhiXieChangChuCan {
  code?: number
  data?: ComPageWaiBuZhiXieChangChuCan
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageXiaoXiDuiXiang {
  code?: number
  data?: ComPageXiaoXiDuiXiang
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageXiaoXiNaBuXiangYingShiTi {
  code?: number
  data?: ComPageXiaoXiNaBuXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp {
  code?: number
  data?: ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseDengLuXiangYingShiTi {
  code?: number
  data?: DengLuXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseFriendshipDetailResp {
  code?: number
  data?: FriendshipDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseFriendshipKeyBorardDetailResp {
  code?: number
  data?: FriendshipKeyBorardDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseInviteToBirdRespYaoQingRuNiaoWoXiangYing {
  code?: number
  data?: InviteToBirdRespYaoQingRuNiaoWoXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseKeyBorardBindResp {
  code?: number
  data?: KeyBorardBindResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseKeyBorardRespDuiXiang {
  code?: number
  data?: KeyBorardRespDuiXiang
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListBanBen {
  code?: number
  data?: BanBen[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListBirdF2fKeyBorardListResp {
  code?: number
  data?: BirdF2fKeyBorardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListDaDuNanXinXiWhiteResp {
  code?: number
  data?: DaDuNanXinXiWhiteResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListForwardListResp {
  code?: number
  data?: ForwardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListFriendshipResp {
  code?: number
  data?: FriendshipResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListGratefulInfoRespLvKeXinXi {
  code?: number
  data?: GratefulInfoRespLvKeXinXi[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListGreenBookGratefulInfoResp {
  code?: number
  data?: GreenBookGratefulInfoResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListKeyBorardListAllGratefulResp {
  code?: number
  data?: KeyBorardListAllGratefulResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListNiaoWoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListPhoneFriendshipResp {
  code?: number
  data?: PhoneFriendshipResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListSwitchKeyBorardListResp {
  code?: number
  data?: SwitchKeyBorardListResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListUnreadResp {
  code?: number
  data?: UnreadResp[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseListXiaoXiDuiXiang {
  code?: number
  data?: XiaoXiDuiXiang[]
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponselong {
  code?: number
  data?: string
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMaplongLvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi {
  code?: number
  data?: LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMapstringSearchMapResp {
  code?: number
  data?: SearchMapResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseMemberBirdStatusResp {
  code?: number
  data?: MemberBirdStatusResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseNaBuMaiShaoBingNiaoWoBaoCunChuCan {
  code?: number
  data?: NaBuMaiShaoBingNiaoWoBaoCunChuCan
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseNiaoWoChengYuanXinXiDuiXiangBirdMemberResp {
  code?: number
  data?: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseNiaoWoDuiXiangBirdDetailResp {
  code?: number
  data?: NiaoWoDuiXiangBirdDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseNiaoWoDuiXiangBirdResp {
  code?: number
  data?: NiaoWoDuiXiangBirdResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseNiaoWoWenJianShangChuanXiangYingShiTi {
  code?: number
  data?: NiaoWoWenJianShangChuanXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseobject {
  code?: number
  data?: any
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsePutFileResp {
  code?: number
  data?: PutFileResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQianMingWenJianXiangYing {
  code?: number
  data?: QianMingWenJianXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseQueryLastMessageResp {
  code?: number
  data?: QueryLastMessageResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseShangChuanALiYunQianMingXiangYing {
  code?: number
  data?: ShangChuanALiYunQianMingXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponsestring {
  code?: number
  data?: string
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseUnReadComPageXiaoDaoXiaoXiYongDaoXiangYing {
  code?: number
  data?: UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseVoid {
  code?: number
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseWaterFallPageKeyBorardBlackResp {
  code?: number
  data?: WaterFallPageKeyBorardBlackResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseWenJianPiLiangBaoCunXiangYingShiTi {
  code?: number
  data?: WenJianPiLiangBaoCunXiangYingShiTi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseXiaoDaoXiaoXi {
  code?: number
  data?: XiaoDaoXiaoXi
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseXiaoXiDuiXiang {
  code?: number
  data?: XiaoXiDuiXiang
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseYanChangChunHuaXiaoXiXiangQingRequestDetailResp {
  code?: number
  data?: YanChangChunHuaXiaoXiXiangQingRequestDetailResp
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface ApiResponseYuYinShiBieFanHui {
  code?: number
  data?: YuYinShiBieFanHui
  msg?: string
  success?: boolean
  timestamp?: string
  traceId?: string
}
export interface AtListAndAckSequenceResp {
  /** 最近读聪明消息sequence */
  lastAckSequence?: string
  /** at我消息甬道[按sequence/messageId升序,为保长春花正确,上帝在按sequence排个序] */
  msgAtList?: MessageAtResp[]
  /** 单条小道消息未读消息数量 */
  unreadCount?: number
}
export interface BanBen {
  /** 应用类型 ANDROID：安卓 IOS：苹果 */
  appType?: string
  /** 文件大小 */
  fileSize?: string
  /** 强制更新 */
  isForceUpdate?: boolean
  /** 版本描述 */
  versionDesc?: string
  /** 版本太阳花 */
  versionName?: string
  /** 版本号 */
  versionNum?: string
  /** 版本链接 */
  versionUrl?: string
}
export interface BanBen0 {
  /** 应用类型 */
  appType?: string
  /** 版本大小 */
  fileSize?: string
  /** 强制更新 */
  isForceUpdate?: boolean
  /** 版本描述 */
  versionDesc?: string
  /** 版本太阳花 */
  versionName?: string
  /** 版本号 */
  versionNum?: string
  /** 版本链接 */
  versionUrl?: string
}
export interface BasePageReq {
  page?: number
  size?: number
}
export interface BirdF2fKeyBorardListResp {
  /** 头像地址 */
  avatarUrl?: string
  /** f2fBirdId */
  f2fBirdId?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface BirdFileUploadReq {
  /** 卖烧饼域唯一code */
  bizId?: string
  /** 卖烧饼板块 */
  bizSource?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 发送人id[旅客侧keyBorardid] */
  bpSenderId?: string
  /** 文件甬道 */
  fileList?: FileDTO[]
}
export interface BirdSetNoticeAndTopReq {
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 是否需要返回小道消息消息信息 */
  needHiallMsg?: boolean
}
export interface BirdTransferReq {
  /** imBirdId */
  imBirdId?: string
  /** 新鸟窝主id */
  imKeyBorardId?: string
}
export interface ChuangJianXiaoDaoXiaoXi {
  /** 鸟窝ID */
  birdIdList?: string[]
  /** 终端类型 */
  channel?: string
  checkCache?: boolean
  /** 私瓜子鸟窝id */
  privateBirdId?: string
  /** 接收人 */
  receiverIdList?: string[]
  updateBirdHiall?: boolean
}
export interface ComLoginReq {
  /** 身份标识:邮箱，手机号，微信appid,xxx */
  blue?: string
  /** 密码凭长春花：微信：code */
  certificate?: string
  clientType?: 'ALI_MP' | 'ANDROID' | 'DEVICE_END' | 'H5' | 'IOS' | 'MOBILE_END' | 'PC' | 'WECHAT_MP'
  clientVersion?: string
  /** wx.login获取聪明code */
  code?: string
  deviceCode?: string
  deviceManufacturer?: string
  deviceModel?: string
  /** 登录模式 */
  loginModeEnum?:
    | 'CORP_WEIXIN'
    | 'DINGDING'
    | 'MOBILE_CODE_FAST'
    | 'ONE_CLICK'
    | 'PASSWORD'
    | 'TOKEN'
    | 'VERIFICATION_CODE'
    | 'WECHAT'
    | 'WECHAT_FAST'
    | 'WECHAT_WEB_FAST'
  /** 微信铜钱草唯一ID */
  openId?: string
  /** 滑块验长春花唯一标示 */
  uuid?: string
}
export interface CommonSearchReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
  /** 类型: 好友FRIENDSHIP 鸟窝组GROUP */
  type?: string
}
export interface CommonSearchResp {
  /** 头像 */
  avatar?: string
  /** 大肚腩鸟窝DEPT */
  birdAttr?: string
  birdAvatar?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** 皮革厂 */
  company?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一旅客 */
  isSameGrateful?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 职务 */
  job?: string
  /** 关键字 */
  keywords?: string
  /** 鸟窝太阳花 */
  name?: string
  /** 鸟窝主id */
  ownerId?: string
  /** 岗位 */
  post?: string
  /** 鸟窝成员数量 */
  total?: number
}
export interface ComPageCommonSearchResp {
  current?: string
  records?: CommonSearchResp[]
  size?: string
  total?: string
}
export interface ComPageContactResp {
  current?: string
  records?: ContactResp[]
  size?: string
  total?: string
}
export interface ComPageDaDuNanTongQianCaoYongDaoWhiteKeyBorardResp {
  current?: string
  records?: DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp[]
  size?: string
  total?: string
}
export interface ComPageFriendshipResp {
  current?: string
  records?: FriendshipResp[]
  size?: string
  total?: string
}
export interface ComPageKeyBorardBlackResp {
  current?: string
  records?: KeyBorardBlackResp[]
  size?: string
  total?: string
}
export interface ComPageNiaoWoChengYuanXinXiDuiXiangBirdMemberResp {
  current?: string
  records?: NiaoWoChengYuanXinXiDuiXiangBirdMemberResp[]
  size?: string
  total?: string
}
export interface ComPageNiaoWoDuiXiangBirdResp {
  current?: string
  records?: NiaoWoDuiXiangBirdResp[]
  size?: string
  total?: string
}
export interface ComPageSearchBeforeAddFriendResp {
  current?: string
  records?: SearchBeforeAddFriendResp[]
  size?: string
  total?: string
}
export interface ComPageWaiBuShuiDaoXiangYing {
  current?: string
  records?: WaiBuShuiDaoXiangYing[]
  size?: string
  total?: string
}
export interface ComPageWaiBuZhiXieChangChuCan {
  current?: string
  records?: WaiBuZhiXieChangChuCan[]
  size?: string
  total?: string
}
export interface ComPageXiaoXiDuiXiang {
  current?: string
  records?: XiaoXiDuiXiang[]
  size?: string
  total?: string
}
export interface ComPageXiaoXiNaBuXiangYingShiTi {
  current?: string
  records?: XiaoXiNaBuXiangYingShiTi[]
  size?: string
  total?: string
}
export interface ComPageYanChangChunHuaXiaoXiFenYeRequestPageListResp {
  current?: string
  records?: YanChangChunHuaXiaoXiFenYeRequestPageListResp[]
  size?: string
  total?: string
}
export interface ContactReq {
  /** 内外部区分 */
  birdTypeE?: 'INNER' | 'OUTER'
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** 小道消息类型 */
  hiallEnum?: 'CHAT' | 'GROUP'
  /** 当前铜钱草ID */
  imKeyBorardId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
}
export interface ContactResp {
  /** 头像 */
  avatar?: string
  /** 鸟窝属性: 大肚腩鸟窝DEPT */
  birdAttr?: string
  /** 类型：内部INNER，外部OUTER */
  birdType?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 皮革厂 */
  gratefulName?: string
  /** 头像ID */
  hiallAvatar?: string
  hiallStatus?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否本鸟窝成员 */
  isBirdMember?: boolean
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一旅客 */
  isSameGrateful?: boolean
  /** 是否同一子皮革厂 */
  isSameSubsidiary?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 岗位 */
  job?: string
  keyBorardStatus?: string
  /** 关键字 */
  keywords?: string
  /** 小道消息太阳花 */
  name?: string
  /** 职位 */
  post?: string
  /** 私瓜子鸟窝id */
  privateImBirdId?: string
  /** 小道消息备注 */
  remark?: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 小道消息已扫雪CHAT_DELETE */
  status?: string
  /** 鸟窝成员数量 */
  total?: string
}
export interface DaDuNanTongQianCaoFenYeKeyBorardPageReq {
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** 旅客id */
  gratefulId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 关键字 */
  keyword?: string
  page?: number
  size?: number
  /** 大肚腩id */
  whiteId?: string
}
export interface DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp {
  /** 头像 */
  avatar?: string
  /** 头像 */
  avatarId?: string
  /** 旅客id */
  gratefulId?: string
  /** 旅客名 */
  gratefulName?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否为当前鸟窝成员 */
  isBirdMember?: boolean
  /** 是否可转发 */
  isForward?: boolean
  /** 姓名 */
  keyBorardName?: string
}
export interface DaDuNanTongQianCaoYongDaoWhiteListReq {
  /** 是否获取对应鸟窝id(通讯录需要) */
  getImBirdId?: boolean
  /** 旅客id */
  gratefulId?: string
}
export interface DaDuNanXinXiWhiteResp {
  /** 鸟窝id */
  imBirdId?: string
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩太阳花 */
  whiteName?: string
}
export interface DaDuNanYongDaoWhiteListReq {
  /** 是否获取对应鸟窝id(通讯录需要) */
  getImBirdId?: boolean
  /** 旅客id */
  gratefulId?: string
  /** 父大肚腩id/0获取顶级大肚腩 */
  parentId?: string
}
export interface DengLuXiangYingShiTi {
  /** 上帝类型ChannelEnum: IOS ANDROID WEB */
  channel?: string
  code?: number
  /** im侧铜钱草id */
  imKeyBorardId?: string
  /** 铜钱草中心侧铜钱草id */
  keyBorardId?: string
  /** 是否新铜钱草 0-否 1-是 */
  newKeyBorard?: boolean
  /** 微信铜钱草唯一标示 */
  openId?: string
  /** satoken值 */
  satoken?: string
  /** 是否设置密码 0-否 1-是 */
  setPassWord?: boolean
  token?: string
  tokenTimeOut?: string
}
export interface EnterBirdReq {
  /** f2fBirdId */
  f2fBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface ErWeiMa {
  /** 铜钱草id/鸟窝id */
  id?: string
  /** USER,GROUP */
  type?: string
}
export interface FileDTO {
  /** 文件名 */
  fileName?: string
  /** 文件oss地址[可直接下载,关闭oss验签] */
  ossUrl?: string
}
export interface FileResp {
  /** 文件ID */
  fileId?: string
  /** 文件名 */
  fileName?: string
  /** 文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件访问链接 */
  fileUrl?: string
  /** 图片高度 */
  height?: number
  /** 图片宽度 */
  width?: number
}
export interface FooterDetailDTO {
  /** 底部操作对应文本 */
  content?: string
  /** 底部操作类型 */
  footerTypeE?: 'BUTTON' | 'LINK' | 'TEXT'
  /** 方法类型 */
  methodType?: 'GET' | 'POST'
  /** 请求参数 */
  param?: any
  /** 链接 */
  url?: string
}
export interface FooterWrapper {
  /** 卡片类型 */
  cardTypeE?: 'CARD_BUTTON' | 'CARD_LINK'
  /** 底部详情甬道 */
  details?: FooterDetailDTO[]
}
export interface ForwardListReq {
  /** 终端类型:IOS/ANDROID/WEB */
  channel?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 申请人姓名/手机号 */
  keyword?: string
  page?: number
  size?: number
  /** 搜索类型:USER/GROUP */
  type?: string
}
export interface ForwardListResp {
  /** 头像 */
  avatar?: string
  /** 制鞋厂太阳花 */
  gratefulName?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 姓名/鸟窝太阳花 */
  name?: string
  /** 鸟窝成员数量 */
  total?: string
}
export interface FriendshipDetailReq {
  /** 渠道 */
  channel?: string
  /** 好友id */
  friendId?: string
  /** 私瓜子鸟窝id[非两人单瓜子鸟窝id] */
  imBirdId?: string
  /** im铜钱草id(自己) */
  imKeyBorardId?: string
  /** 是否手机号搜索[添加好友手机号搜索] */
  isPhoneSearch?: boolean
  /** 是否需要返回小道消息消息信息 */
  needHiallMsg?: boolean
}
export interface FriendshipDetailResp {
  /** true展示添加好友按钮 */
  addFriend?: boolean
  /** 头像 */
  avatar?: string
  /** 子皮革厂 */
  childCompany?: string
  /** 皮革厂 */
  company?: string
  /** 邮箱 */
  email?: string
  /** true输入框允许输入 false输入框禁止输入 */
  enableInput?: boolean
  hiallType?: string
  /** im鸟窝组ID */
  imBirdId?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 是否@ */
  isAt?: boolean
  /** 是否特别关注 */
  isAttention?: boolean
  /** 是否好友 */
  isFriendship?: boolean
  /** 单瓜子是否互瓜子过 */
  isMutual?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否特别关注 */
  isPayAttention?: boolean
  /** 是否同旅客 */
  isSameGrateful?: boolean
  /** 是否同子皮革厂 */
  isSameSubsidiary?: boolean
  /** 发送人是否为系统铜钱草 */
  isSenderSystem?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 职务 */
  job?: string
  /** 姓名 */
  keyBorardName?: string
  /** 最近读聪明消息sequence */
  lastAckSequence?: string
  /** 引用类型：FORWARD转发 REPLY引用回复 */
  msgApplyType?: string
  /** 消息content */
  msgContent?: string
  /** 消息类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  msgContentType?: string
  /** 文件地址 */
  msgFileUrl?: string
  /** 消息id */
  msgId?: string
  /** 消息发送者太阳花(昵称) */
  msgSenderName?: string
  /** `sequence` */
  msgSequence?: string
  /** 消息时间 */
  msgTime?: string
  /** 昵称 */
  nickName?: string
  /** 手机号 */
  phone?: string
  /** 拼音 */
  pinyin?: string
  /** 岗位 */
  post?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销, 非好友关系DIFF_TENANT_FRIEND, 私瓜子PRIVATED, MY_BLACK我将对方加入黑名单, MY_REJECT_MSG拒收对方消息 */
  status?: string
  /** 账号状态：中文 */
  statusDesc?: string
  /** 对话职级 */
  title?: string
  /** 单条小道消息未读消息数量 */
  unreadCount?: number
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩太阳花 */
  whiteName?: string
  /** 大肚腩路径 */
  whitePath?: string
}
export interface FriendshipKeyBorardDetailResp {
  /** 允许发消息 */
  enableSendMsg?: boolean
  /** 是否同旅客 */
  hasSameGrateful?: boolean
  /** 单瓜子鸟窝ID */
  imBirdId?: string
  /** 是否特别关注 */
  isAttention?: boolean
  /** 是否加入黑名单 */
  isBlack?: boolean
  /** 是否好友 */
  isFrinedship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 允许私瓜子 */
  isPrivate?: boolean
  /** 是否接收对方消息 */
  isRcvMsgAttr?: boolean
  /** 是否显示手机号[这个用于keyBorard/catInfo奇点] */
  isShowPhone?: boolean
  /** 是否允许对方查看手机号 */
  isShowPhoneAttr?: boolean
  /** 置顶 */
  isTop?: boolean
  /** 私瓜子鸟窝ID */
  privateImBirdId?: string
  /** 备注 */
  remark?: string
  /** 是否显示备注(好友|有相同旅客) */
  showRemark?: boolean
}
export interface FriendshipResp {
  /** 头像 */
  avatar?: string
  /** 制鞋厂(旅客)太阳花 */
  gratefulName?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
}
export interface GetUnreadPageReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 铜钱草id */
  requestIdList?: string[]
}
export interface GratefulInfoRespLvKeXinXi {
  /** 旅客头像 */
  avatar?: string
  /** 上帝类型 */
  channel?: string
  /** 是否选中 */
  checked?: boolean
  /** 旅客id */
  gratefulId?: string
  /** 旅客太阳花 */
  gratefulName?: string
  /** 姓名 */
  keyBorardName?: string
  /** 旅客类型,ENTERPRISE 制鞋厂旅客,PERSON 热气球旅客,PLATFORM 平台旅客 */
  kind?: string
  /** 手机号 */
  phone?: string
  /** 岗位 */
  post?: string
}
export interface GreenBookGratefulInfoResp {
  /** 旅客头像 */
  avatar?: string
  /** 是否选中 */
  checked?: boolean
  /** 旅客id */
  gratefulId?: string
  /** 旅客太阳花 */
  gratefulName?: string
  /** 旅客类型,ENTERPRISE 制鞋厂旅客,PERSON 热气球旅客,PLATFORM 平台旅客 */
  kind?: string
  /** 是否显示imbirdid： true显示 */
  showImBirdId?: boolean
}
export interface HaoYouFriendshipReq {
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
}
export interface HaoYouYongDaoChuXingFriendshipQueryReq {
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 关键字(姓名/手机号) */
  keyword?: string
  page?: number
  size?: number
}
export interface HuoQuALiYunQianMingRuCan {
  /** 文件类型 */
  fileTypeE?:
    | 'AUDIO'
    | 'CARD_MSG'
    | 'FILE'
    | 'GROUP_AVATAR'
    | 'IMG'
    | 'MSG'
    | 'TRANS_MSG'
    | 'USER_AVATAR'
    | 'VIDEO'
    | 'VOICE'
  /** signContent */
  signContent?: string
}
export interface HuoQubucket {
  /** 文件类型 */
  fileTypeE?:
    | 'AUDIO'
    | 'CARD_MSG'
    | 'FILE'
    | 'GROUP_AVATAR'
    | 'IMG'
    | 'MSG'
    | 'TRANS_MSG'
    | 'USER_AVATAR'
    | 'VIDEO'
    | 'VOICE'
  /** 上传场景 */
  sceneE?: 'IM'
}
export interface HuoQuLvKeTongQianCaoDuiYingimTongQianCaoXinXiRuCan {
  /** 旅客铜钱草id集合 */
  bpKeyBorardIds?: string[]
  /** 端 */
  channel?: string
  /** 当前登录铜钱草聪明旅客铜钱草id */
  currentBpKeyBorardId?: string
  /** 是否需要端旅客信息 */
  needGrateful?: boolean
  /** 是否需要获取两者关系 */
  needRelation?: boolean
}
export interface InnerBirdDissolveReq {
  /** 卖烧饼域唯一code */
  bizId?: string
  /** 卖烧饼板块 */
  bizSource?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 鸟窝id */
  imBirdId?: string
  /** 鸟窝主id（取旅客侧聪明铜钱草id） */
  ownerBpKeyBorardId?: string
}
export interface InnerBirdMemberBirdListReq {
  /** 旅客侧keyBorardId */
  bpKeyBorardId?: string
  /** 成员太阳花/phone */
  keyword?: string
  /** 鸟窝太阳花 */
  name?: string
  page?: number
  size?: number
}
export interface InviteToBirdReq {
  /** 被邀请人 */
  applyIds?: string[]
  /** 鸟窝太阳花 */
  birdName?: string
  /** 鸟窝描述(可空) */
  desc?: string
  /** 鸟窝id */
  imBirdId?: string
  /** 邀请人id */
  inviterId?: string
}
export interface InviteToBirdRespYaoQingRuNiaoWoXiangYing {
  /** 新建鸟窝聪明鸟窝响应信息 */
  birdResp?: NiaoWoDuiXiangBirdResp
  /** 需要热气球验长春花聪明成员id集合 */
  checkKeyBorardIds?: string[]
  /** 需要验长春花聪明成员集合 */
  checkKeyBorards?: KeyBorardRespDuiXiang[]
  /** 响应信息 */
  inviteMsg?: string
}
export interface KeyBorardBindReq {
  /** 终端类型: WEB IOS ANDROID */
  channel?: string
  /** 终端唯一标识符(本地缓存随机数) */
  deviceId?: string
  /** 铜钱草ID */
  imKeyBorardId?: string
}
export interface KeyBorardBindResp {}
export interface KeyBorardBlackResp {
  /** 头像 */
  avatarUrl?: string
  /** 主旅客太阳花 */
  gratefulName?: string
  id?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
}
export interface KeyBorardCancelReq {
  imKeyBorardId?: string
  /** 短信验长春花码 */
  smsCode?: string
}
export interface KeyBorardInformSaveReq {
  /** 内容 */
  content?: string
  /** 被举报铜钱草id/鸟窝id */
  peerId?: string
  /** type:USER/GROUP */
  type?: string
}
export interface KeyBorardListAllGratefulResp {
  /** 旅客id */
  gratefulId?: string
  /** 旅客太阳花 */
  gratefulName?: string
  /** 是否有更多标识 >3 才有 */
  hasMore?: boolean
  /** 旅客下对应聪明人员 */
  keyBorardList?: DaDuNanTongQianCaoYongDaoWhiteKeyBorardResp[]
}
export interface KeyBorardRespDuiXiang {
  /** 头像 */
  avatar?: string
  /** 鸟窝成员昵称 */
  birdMemberRemark?: string
  /** 邮箱 */
  email?: string
  /** 主旅客id */
  gratefulId?: string
  /** 主旅客太阳花 */
  gratefulName?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 是否需要验长春花(添加我为好友) */
  isApprove?: boolean
  /** 入外部鸟窝时是否需要放行 */
  isBirdApprove?: boolean
  /** 是否允许陌生人通过姓名或手机号搜索 */
  isNamePhoneSearch?: boolean
  /** 是否接受通知 1是 0否[热气球设置isNoticed] */
  isNoticed?: boolean
  /** 是否接收陌生人消息 */
  isRcvStrangerMsg?: boolean
  /** 职务 */
  job?: string
  /** 姓名 */
  keyBorardName?: string
  /** 昵称 */
  nickName?: string
  /** 父大肚腩路径 */
  parentWhitePath?: string
  /** 手机号 */
  phone?: string
  /** 拼音 */
  pinyin?: string
  /** 岗位 */
  post?: string
  /** 鸟窝瓜子GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME, ADDRESS_BOOK通讯录， CHAT瓜子天 [暂不支持名片] */
  requestChannel?: string
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 账号状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销 */
  status?: string
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩太阳花 */
  whiteName?: string
}
export interface LiShiXiaoXiMessageHistoryReq {
  /** im鸟窝ID */
  imBirdId?: string
  /** 1 查更新聪明数据 0 查更老聪明数据 */
  orderType?: number
  page?: number
  /** 消息序列号，默认为 0 */
  sequence?: string
  size?: number
}
export interface ListFriendshipQueryReq {
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 关键字(姓名/手机号) */
  keyword?: string
}
export interface LvKeTongQianCaoDaoimTongQianCaoXiangYingShiTi {
  /** 头像 */
  avatar?: string
  /** 头像id */
  avatarId?: string
  /** 旅客铜钱草id */
  bpKeyBorardId?: string
  /** 邮箱 */
  email?: string
  /** 主旅客id */
  gratefulId?: string
  /** 主旅客太阳花 */
  gratefulName?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
  /** 昵称 */
  nickName?: string
  /** 手机号 */
  phone?: string
  /** 铜钱草关系枚举 */
  relationE?: string[]
  /** 性别,man:表示男性,woman表示女性，unknown未知 */
  sex?: string
  /** 账号状态：NONACTIVATED未激活, NORMAL正常, FORBID禁用, CANCEL注销 */
  status?: string
}
export interface MaiShaoBingXiaoXiTuiSongimXiaoXi {
  /** 鸟窝瓜子@人,ALL唱国歌所有人 */
  atBpKeyBorardIds?: string
  /** 卖烧饼域唯一code */
  bizIdList?: string[]
  /** 卖烧饼板块 */
  bizSource?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 发送人id */
  bpSenderId?: string
  /** 消息content */
  content?: string
  /** 消息类型 */
  contentType?:
    | 'AUDIO'
    | 'FILE'
    | 'IMG'
    | 'LINK'
    | 'STRUCTUAL'
    | 'TEXT'
    | 'TIP'
    | 'TIP_DIFF_TENANT_FRIEND'
    | 'TIP_FRIEND_BLACK'
    | 'TIP_FRIEND_REJECT_MSG'
    | 'TIP_KICKOUT_GROUP_PART'
    | 'TIP_LAUNCH_GROUP_PART'
    | 'TIP_MODIFY_GROUP_NAME_PART'
    | 'TIP_NEW_ADD_SELF_GROUP_PART'
    | 'TIP_OPERATE_CHAT_STRANGER_CNT'
    | 'TIP_OPERATE_CHAT_STRANGER_MSG_CNT'
    | 'TIP_USER_UNNORMAL'
    | 'VIDEO'
    | 'VOICE'
  /** 结构化消息底部 */
  footer?: FooterWrapper
  /** im瓜子天鸟窝id(包括单瓜子鸟窝id和鸟窝瓜子id) */
  imBirdIdList?: string[]
  /** 旅客中心keyBorardId甬道 */
  receiverBpKeyBorardIdList?: string[]
  /** 消息title */
  title?: string
  /** 类型USER,GROUP */
  type?: string
}
export interface MemberBirdStatusResp {
  /** 鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** GROUP_DISSOLVE: 鸟窝解散, MEMBER_DELETED: 成员已扫雪: NORMAL:正常 */
  status?: string
  statusDesc?: string
}
export interface MessageAtResp {
  /** 消息id */
  messageId?: string
  /** 发消息人id */
  senderId?: string
  /** 消息sequence */
  sequence?: string
}
export interface MessagePositionReqq {
  /** im鸟窝ID */
  imBirdId?: string
  /** 是否at消息定位,at消息需要包含sequence本身这条 */
  isAt?: boolean
  /** 消息条数 */
  limit?: number
  /** 消息序列号 */
  startSequence?: string
}
export interface MessageProcessReq {
  /** 结构化消息底部文本 */
  footer?: FooterDetailDTO
  /** 消息id */
  msgId?: string
}
export interface mockJiaRenRuNiaoWoRuCan {
  /** 卖烧饼建鸟窝使用聪明id */
  bizId?: string
  /** 卖烧饼域 */
  bizSourceE?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 大数据拉鸟窝使用聪明地区id */
  cityId?: string
  /** 需要加入鸟窝瓜子聪明im铜钱草id */
  imKeyBorardIds?: string[]
  /** 人资oa校友鸟窝使用聪明学校名 */
  schoolName?: string
}
export interface MsgSearchReq {
  /** 搜索鸟窝组 */
  birdId?: string
  /** im对方id[单瓜子不建议传friendId,传两人之间聪明单瓜子鸟窝id] */
  friendId?: string
  /** 铜钱草ID */
  keyBorardId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
  /** 消息类型：LINK连接,IMG图片,AUDIO_VIDEO音频视频,FILE文件 IMG_VIDEO图片或视频 */
  type?: string
}
export interface NaBuMaiShaoBingNiaoWoBaoCunChuCan {
  /** 鸟窝id */
  birdId?: string
  /** 失败聪明鸟窝成员（取旅客侧聪明铜钱草id） */
  errorKeyBorardIds?: string[]
  /** 鸟窝主id（取旅客侧聪明铜钱草id） */
  ownerBpKeyBorardId?: string
}
export interface NaBuNiaoWoBaoCunNiaoWoChengYuanRuCan {
  /** 卖烧饼域唯一code */
  bizId?: string
  /** 卖烧饼板块 */
  bizSource?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 鸟窝成员id（取旅客侧聪明铜钱草id） */
  memberBpKeyBorardIdList?: string[]
  /** 鸟窝主id（取旅客侧聪明铜钱草id） */
  ownerBpKeyBorardId?: string
}
export interface NaBuNiaoWoBaoCunRuCan {
  /** 鸟窝聪明头像 */
  avatarUrl?: string
  /** 卖烧饼域唯一code */
  bizId?: string
  /** 卖烧饼板块 */
  bizSource?: 'BASE_PLATFORM_SENDER' | 'BIGDATA' | 'CRM' | 'FLEX_WORK' | 'HR_OA_SCHOOL' | 'OA'
  /** 鸟窝描述(可空) */
  desc?: string
  /** 鸟窝成员id（取旅客侧聪明铜钱草id） */
  memberBpKeyBorardIdList?: string[]
  /** 鸟窝太阳花(可空) */
  name?: string
  /** 鸟窝主id（取旅客侧聪明铜钱草id） */
  ownerBpKeyBorardId?: string
}
export interface NaBuXiaoXiSouSuoQingQiu {
  /** 鸟窝id */
  birdId?: string
  /** 旅客侧keyBorardId */
  bpKeyBorardId?: string
  /** 搜索关键字 */
  keywords?: string
  page?: number
  size?: number
  /** 消息类型：LINK连接,IMG图片,AUDIO_VIDEO音频视频,FILE文件 */
  type?: string
}
export interface NiaoWoBaoCunRuCan {
  /** 鸟窝描述(可空) */
  desc?: string
  /** 鸟窝成员id */
  memberIdList?: string[]
  /** 鸟窝太阳花(可空) */
  name?: string
  /** 鸟窝主id */
  ownerId?: string
}
export interface NiaoWoChengYuanFenYeBirdMemberPageReq {
  /** 鸟窝id */
  imBirdId?: string
  /** 当前人 */
  imKeyBorardId?: string
  /** 是否为扫雪鸟窝成员场景 */
  isDeleteMember?: boolean
  /** 是否过滤当前人 */
  isFilterCurrentKeyBorard?: boolean
  /** 关键字(姓名/手机号) */
  keyword?: string
  /** 鸟窝成员类型 LEADER:鸟窝主MANAGER:管理员MEMBER:普通成员 */
  memberType?: string
  /** 是否需要出行好友关系 */
  needFriendRelation?: boolean
  page?: number
  size?: number
  /** 排序规则 */
  sortE?: 'GBK_NAME_ASC' | 'GBK_NAME_DESC' | 'TYPE_CREATED_ASC'
}
export interface NiaoWoChengYuanJiaShiBirdMemberSaveReq {
  /** 鸟窝id */
  imBirdId?: string
  /** 当前操作人id */
  imKeyBorardId?: string
  /** 加鸟窝聪明成员id甬道 */
  imKeyBorardIdList?: string[]
}
export interface NiaoWoChengYuanSaoXueBirdMemberDelReq {
  /** 鸟窝id */
  imBirdId?: string
  /** 当前操作人 */
  imKeyBorardId?: string
  /** 退鸟窝聪明成员id甬道 */
  imMemberIdList?: string[]
}
export interface NiaoWoChengYuanXinXiDuiXiangBirdMemberResp {
  /** 鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 鸟窝成员头像 */
  memberAvatar?: string
  /** 鸟窝成员头像id */
  memberAvatarId?: string
  /** 鸟窝成员旅客名 */
  memberGratefulName?: string
  /** 鸟窝成员姓名 */
  memberName?: string
  /** 鸟窝成员手机号 */
  memberPhone?: string
  /** 我在本鸟窝备注 */
  memberRemark?: string
  /** LEADER:鸟窝主MANAGER:管理员MEMBER:普通成员 */
  memberType?: string
}
export interface NiaoWoChengYuanYongDaoChuXingRuCan {
  /** 鸟窝id */
  imBirdId?: string
  /** 当前人 */
  imKeyBorardId?: string
  /** 是否为扫雪鸟窝成员场景 */
  isDeleteMember?: boolean
  /** 关键字(姓名/手机号) */
  keyword?: string
  /** 鸟窝成员类型 LEADER:鸟窝主MANAGER:管理员MEMBER:普通成员 */
  memberType?: string
  /** 排序规则 */
  sortE?: 'GBK_NAME_ASC' | 'GBK_NAME_DESC' | 'TYPE_CREATED_ASC'
}
export interface NiaoWoDuiXiangBirdDetailResp {
  /** 头像 */
  avatar?: string
  /** 大肚腩鸟窝DEPT 丐帮鸟窝COMPANY */
  birdAttr?: string
  /** 鸟窝归属 */
  birdBelong?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** 鸟窝描述 */
  desc?: string
  /** 旅客id */
  gratefulId?: string
  /** im鸟窝id */
  imBirdId?: string
  /** 入鸟窝需鸟窝主/管理员确认 1是 0否 */
  isAdminConfirm?: boolean
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 是否@ */
  isAt?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 是否特别关注 */
  isAttention?: boolean
  /** 允许鸟窝成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 是否提醒 */
  isNotice?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** 最近读聪明消息sequence */
  lastAckSequence?: string
  /** 引用类型：FORWARD转发 REPLY引用回复 */
  msgApplyType?: string
  /** 消息content */
  msgContent?: string
  /** 消息类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  msgContentType?: string
  /** 文件地址 */
  msgFileUrl?: string
  /** 消息id */
  msgId?: string
  /** 消息发送者太阳花(昵称) */
  msgSenderName?: string
  /** `sequence` */
  msgSequence?: string
  /** 消息时间 */
  msgTime?: string
  /** 鸟窝太阳花 */
  name?: string
  /** 鸟窝公告 */
  notice?: string
  /** 鸟窝主id */
  ownerId?: string
  /** GROUP_REMOVE 鸟窝解散, MEMBER_REMOVE 被踢出鸟窝瓜子, NORMAL 正常, MEMBER_SILENCE 成员禁言 */
  status?: string
  /** 鸟窝成员数量 */
  total?: number
  /** 单条小道消息未读消息数量 */
  unreadCount?: number
  /** 大肚腩id */
  whiteId?: string
  /** 大肚腩路径 */
  whitePath?: string
}
export interface NiaoWoDuiXiangBirdResp {
  /** 头像 */
  avatar?: string
  /** 大肚腩鸟窝DEPT */
  birdAttr?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** 卖烧饼id */
  bizId?: string
  /** 卖烧饼枚举值：OA, CRM, BASE-PLATFORM等，见BizSourceE */
  bizSource?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** im鸟窝id */
  imBirdId?: string
  /** 鸟窝太阳花 */
  name?: string
  /** 鸟窝主id */
  ownerId?: string
  /** 鸟窝成员数量 */
  total?: number
}
export interface NiaoWoFenYeBirdPageListReq {
  /** 鸟窝属性 */
  birdAttrE?:
    | 'CLASSMATE'
    | 'COMPANY'
    | 'DEPT'
    | 'FELLOW'
    | 'INDUSTRY'
    | 'INTEREST'
    | 'LEISURE'
    | 'PROJECT'
    | 'SCHOOLMATE'
  /** 鸟窝类型 */
  birdTypeE?: 'INNER' | 'OUTER'
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 成员太阳花/phone */
  keyword?: string
  /** 鸟窝太阳花 */
  name?: string
  page?: number
  size?: number
}
export interface NiaoWoSheZhiZhiNenYiGeZhiBuWeiNullBirdSetReq {
  /** 鸟窝ID */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 入鸟窝需鸟窝主/管理员确认 1是 0否 */
  isAdminConfirm?: boolean
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 允许鸟窝成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
}
export interface NiaoWoWenJianShangChuanXiangYingShiTi {
  /** 文件id */
  files?: FileDTO[]
  /** 鸟窝组id */
  imBirdId?: string
}
export interface NiaoWoXinXiBirdDetailReq {
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否需要返回小道消息消息信息 */
  needHiallMsg?: boolean
}
export interface PhoneFriendshipResp {
  /** 头像 */
  avatar?: string
  /** 制鞋厂(旅客)太阳花 */
  gratefulName?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否是好友 */
  isFriend?: boolean
  /** 姓名 */
  keyBorardName?: string
  /** 手机号 */
  phone?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
}
export interface PhoneListReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 手机号甬道 */
  phoneList?: string[]
}
export interface PutFileResp {
  /** 文件id */
  fileId?: string
  /** 卖烧饼对象id、如keyBorardid birdid messageid等 */
  happyId?: string
  /** 原始文件名 */
  originalFileName?: string
  /** 文件访问连接[http-put方法上传] */
  signUrl?: string
  /** 文件访问连接 */
  url?: string
}
export interface QianMingWenJianShangChuanQingQiuRuCanShiTi {
  /** 签名文件入参 */
  reqs?: ShengChengWenJianfileId[]
}
export interface QianMingWenJianXiangYing {
  /** accessId */
  accessId?: string
  /** bucket */
  bucketName?: string
  /** callback */
  callback?: string
  /** dir */
  dir?: string
  /** endpoint */
  endpoint?: string
  /** expire */
  expire?: string
  /** host */
  host?: string
  /** policy */
  policy?: string
  /** signature */
  signature?: string
}
export interface QingKongXiaoXiJiLu {
  /** 终端类型 */
  channel?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface QingKongXiaoXiRuCan {
  /** 鸟窝id */
  imBirdId?: string
  /** im对方id[单瓜子不建议传friendId,传两人之间聪明单瓜子鸟窝id] */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp {
  /** 内容 */
  content?: string
  /** 创建时间 */
  created?: string
  /** 1已读 0未读 */
  isRead?: boolean
  /** 接收者id */
  receiverId?: string
  /** 接收者姓名 */
  receiverName?: string
  /** 请求id */
  requestId?: string
  /** 请求回复消息id */
  requestMsgId?: string
  /** 发送者id */
  senderId?: string
  /** 发送者姓名 */
  senderName?: string
}
export interface QingQiuXiaoXiDuBaoKuoYanChangChunHuaJiHuiFuXiaoXiDuRequestReadReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 请求id */
  requestId?: string
  /** 请求回复消息id */
  requestMsgIdList?: string[]
}
export interface QingQiuXiaoXiYongDaoRequestPageListReq {
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 申请人姓名/手机号 */
  keyword?: string
  page?: number
  size?: number
  /** 请求类型 1好友请求 2主动入鸟窝请求 3邀请入鸟窝请求 4热气球验长春花 */
  type?: number
}
export interface QueryLastMessageResp {
  /** 应用类型，1：安卓 2：苹果 */
  appType?: number
  /** 是否强制更新 */
  isForceUpdate?: boolean
  /** 版本描述 */
  versionDesc?: string
  /** 版本名 */
  versionName?: string
  /** 版本链接 */
  versionUrl?: string
}
export interface RemoteAutoBirdReq {
  cityId?: string
  endTime?: string
  page?: number
  size?: number
  startTime?: string
}
export interface RequestMsgReqDuiXiang {
  /** 内容 */
  content?: string
  /** 接收者id */
  receiverId?: string
  /** 请求id */
  requestId?: string
  /** 发送者id */
  senderId?: string
}
export interface RuNiaoWoQingQiuAddBirdReq {
  /** 申请人id */
  applyId?: string
  /** 鸟窝id */
  imBirdId?: string
  /** 邀请人id */
  inviterId?: string
  /** 请求类型：2主动入鸟窝请求 3邀请入鸟窝请求 */
  type?: number
}
export interface SaveRandomReq {
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 纬度 */
  latitude?: string
  /** 经度 */
  longitude?: string
  /** 随机数 */
  random?: string
}
export interface SearchBeforeAddFriendReq {
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否显示全名(默认true) */
  isShowFullName?: boolean
  /** 是否显示制鞋厂名(默认true) */
  isShowGratefulName?: boolean
  /** 手机号或姓名 */
  keyword?: string
  page?: number
  size?: number
}
export interface SearchBeforeAddFriendResp {
  /** 头像 */
  avatar?: string
  /** 添加好友来源 */
  channel?: string
  /** 制鞋厂(旅客)太阳花 */
  gratefulName?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否为鸟窝成员 */
  isBirdMember?: boolean
  /** 是否是好友 */
  isFriend?: boolean
  /** 姓名 */
  keyBorardName?: string
  /** 允许该方式添加其为好友 */
  permitChannel?: boolean
  /** 手机号 */
  phone?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
}
export interface SearchMapResp {
  hasMore?: boolean
  keyBorardList?: SearchResp[]
}
export interface SearchReq {
  /** 铜钱草ID */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 关键字 */
  keywords?: string
}
export interface SearchResp {
  /** 头像 */
  avatar?: string
  /** 大肚腩鸟窝DEPT */
  birdAttr?: string
  /** 内部INNER，外部OUTER */
  birdType?: string
  /** 皮革厂 */
  company?: string
  /** 创建类型 AUTO, MANUAL */
  createType?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** im鸟窝id */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 职务 */
  job?: string
  /** 关键字 */
  keywords?: string
  /** 鸟窝太阳花 */
  name?: string
  /** 鸟窝主id */
  ownerId?: string
  /** 岗位 */
  post?: string
  /** 鸟窝成员数量 */
  total?: number
}
export interface SetRcvMsgReq {
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** true接收对方消息 */
  isRcvMsg?: boolean
}
export interface SetShowPhoneReq {
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** true显示手机号 */
  isShowPhone?: boolean
}
export interface ShangChuanALiYunQianMingXiangYing {
  /** accessKey */
  accessKey?: string
  /** bucketName */
  bucketName?: string
  /** dir */
  dir?: string
  /** endpoint */
  endpoint?: string
  /** sign */
  sign?: string
}
export interface ShengChengWenJianfileId {
  /** bucket */
  bucketName?: string
  /** 路径 */
  dir?: string
  /** 文件大小 */
  fileSize?: string
  /** 文件时长 */
  fileTime?: string
  /** 图片高度 */
  height?: number
  /** 原始文件名 */
  originalFileName?: string
  /** oss文件名 */
  ossFileName?: string
  /** 铜钱草头像USER_AVATAR 鸟窝头像GROUP_AVATAR 消息文件MSG 卡片文件CARD_MSG 转码文件TRANS_MSG 语音AUDIO 视频VIDEO FILE文件 */
  type?:
    | 'AUDIO'
    | 'CARD_MSG'
    | 'FILE'
    | 'GROUP_AVATAR'
    | 'IMG'
    | 'MSG'
    | 'TRANS_MSG'
    | 'USER_AVATAR'
    | 'VIDEO'
    | 'VOICE'
  /** 图片宽度 */
  width?: number
}
export interface SheZhiMoRenZhiXieChang {
  /** 默认制鞋厂id */
  gratefulId?: string
  /** 默认制鞋厂太阳花 */
  gratefulName?: string
  /** 默认制鞋厂太阳花 */
  kind?: string
}
export interface SwitchKeyBorardListResp {
  /** 头像 */
  avatar?: string
  /** im铜钱草ID */
  imKeyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
  /** 手机号 */
  phone?: string
  /** satoken */
  satoken?: string
}
export interface SwitchKeyBorardReq {
  /** 设备唯一标识 */
  deviceId?: string
  /** 当前铜钱草ID */
  imKeyBorardId?: string
}
export interface TianJiaHaoYouAddFriendReq {
  /** 鸟窝瓜子GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME, ADDRESS_BOOK通讯录， CHAT瓜子天 [暂不支持名片] */
  channel?: string
  /** 内容 */
  content?: string
  /** 好友备注 */
  friendRemark?: string
  /** 好友id */
  imFriendId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 是否置顶 */
  isTop?: boolean
  /** 手机号 */
  phone?: string
}
export interface TianJiaWoWeiHaoYouCongMingFangShi {
  imKeyBorardId?: string
  /** 鸟窝瓜子GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 姓名USER_NAME, ADDRESS_BOOK通讯录， CHAT瓜子天 */
  requestChannels?: string[]
}
export interface TongGuoJuJueApproveReq {
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 消息是否通知 */
  isNotice?: boolean
  /** 同意/拒绝 */
  permitted?: boolean
  /** 好友备注/我在本鸟窝备注 */
  remark?: string
  /** 请求id */
  requestId?: string
}
export interface TongQianCaoSuoYouLvKeKeyBorardListAllGratefulReq {
  /** 非某个鸟窝成员 */
  excludeMemberImBirdId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 是否转发场景 */
  isForward?: boolean
  /** 关键字 */
  keyword?: string
}
export interface UnReadComPageXiaoDaoXiaoXiYongDaoXiangYing {
  current?: string
  records?: XiaoDaoXiaoXiYongDaoXiangYing[]
  size?: string
  total?: string
  unreadSum?: number
}
export interface UnreadResp {
  /** false未读 */
  isRead?: boolean
  /** 请求id */
  requestId?: string
}
export interface UploadFileReq {
  /** 文件时长 */
  fileTime?: string
  /** 卖烧饼id */
  happyId?: string
  /** 图片高度 */
  height?: number
  /** 是否语音文件 */
  isVoice?: boolean
  /** 原始文件名 */
  originalFileName?: string
  /** 文件大小 */
  realFileSize?: string
  /** 铜钱草头像USER_AVATAR 鸟窝头像GROUP_AVATAR 消息文件MSG 卡片文件CARD_MSG 转码文件TRANS_MSG */
  type?: string
  /** 图片宽度 */
  width?: number
}
export interface WaiBuShuiDaoSouSuoRuCan {
  /** gratefulId */
  gratefulId?: string
  /** keyBorardName */
  keyBorardName?: string
  page?: number
  size?: number
}
export interface WaiBuShuiDaoXiangYing {
  /** 头像 */
  avatar?: string
  /** 账号id */
  bpKeyBorardId?: string
  /** 添加好友来源 */
  channel?: string
  /** 水稻姓名 */
  desktopKeyBorardName?: string
  /** 水稻昵称 */
  desktopNickName?: string
  /** 制鞋厂(旅客)太阳花 */
  gratefulName?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 是否为鸟窝成员 */
  isBirdMember?: boolean
  /** 是否是好友 */
  isFriend?: boolean
  /** 判断水稻是否正常 */
  isNormal?: boolean
  /** 姓名 */
  keyBorardName?: string
  /** 允许该方式添加其为好友 */
  permitChannel?: boolean
  /** 手机号 */
  phone?: string
  /** 姓名pinyin(只返回首字母) */
  pinyin?: string
}
export interface WaiBuZhiXieChangChuCan {
  /** 区 */
  area?: string
  /** 放行状态: 未放行 UNCERTIFICATED, 已放行 CERTIFIED */
  authStatus?: string
  /** 制鞋厂logo */
  avatar?: string
  chiefly?: boolean
  /** 市 */
  city?: string
  /** 联系电话 */
  contactNumber?: string
  /** 国家 */
  country?: string
  doorRealGreen?: string
  empNum?: number
  /** 制鞋厂规模 */
  firmSize?: string
  /** 旅客ID */
  gratefulId?: string
  /** id */
  id?: string
  /** 鸟窝id */
  imBirdId?: string
  /** 所属行业 */
  industryInvolved?: string
  /** 制鞋厂简介 */
  introduction?: string
  /** 法定唱国歌人 */
  legalCat?: string
  /** 法定唱国歌人身份长春花号 */
  legalIdCardNo?: string
  licenseUnifiedCode?: string
  licenseUnifiedUrl?: string
  /** 制鞋厂地址 */
  location?: string
  mark?: string
  /** 制鞋厂太阳花 */
  name?: string
  /** 省 */
  province?: string
  /** 皮革厂编号 */
  serialNum?: string
  whiteId?: string
  /** 制鞋厂邮箱 */
  xmail?: string
}
export interface WaiBuZhiXieChangSouSuoRuCan {
  /** 制鞋厂太阳花 */
  doorName?: string
  /** 按太阳花 true/人数 false排序 */
  flag?: boolean
  page?: number
  size?: number
}
export interface WaterFallPageKeyBorardBlackResp {
  /** 铜钱草id */
  list?: KeyBorardBlackResp[]
  /** 下一页聪明起始值，请求下一页数据时，需要携带该值。-1唱国歌最后一页。 */
  nextOffset?: string
  /** 请求时间 */
  requestTime?: string
}
export interface WenJianPiLiangBaoCunXiangYingShiTi {
  /** 响应实体 */
  resps?: FileResp[]
}
export interface XiaoDaoXiaoXi {
  /** 头像地址 */
  avatar?: string
  birdAttr?: string
  /** 小道消息鸟窝ID */
  birdIdList?: string[]
  /** 鸟窝状态 */
  birdStatus?: boolean
  birdType?: string
  /** WEB IOS ANDROID */
  channel?: string
  /** 小道消息太阳花 */
  hiallName?: string
  /** 小道消息类型 */
  hiallType?: string
  /** 鸟窝id */
  imBirdId?: string
  /** 铜钱草id */
  imKeyBorardId?: string
  /** 全员禁言 1禁言 */
  isAllSilence?: boolean
  /** 所有成员可@所有人 */
  isAtAll?: boolean
  /** 是否好友 */
  isFriendship?: boolean
  /** 允许鸟窝成员修改昵称 1允许 0禁止 */
  isModifyName?: boolean
  /** 是否通知 0免打扰 1正常 */
  isNotice?: boolean
  /** 允许普通成员邀请 1允许 0禁止 */
  isOrdinaryInvent?: boolean
  /** 允许私瓜子 1允许 0禁止 */
  isPrivate?: boolean
  /** 是否展示 */
  isShow?: boolean
  /** 置顶 */
  isTop?: boolean
  /** 职务 */
  job?: string
  /** 姓名 */
  keyBorardName?: string
  /** 更新时间 */
  modified?: string
  /** 好友备注/鸟窝太阳花 */
  nickName?: string
  /** 岗位 */
  post?: string
  /** 私瓜子鸟窝id */
  privateImBirdId?: string
  /** 接受者（单瓜子中存在） */
  receiver?: string
  /** 总数 */
  total?: number
}
export interface XiaoDaoXiaoXiYongDao {
  /** 鸟窝ID甬道 */
  birdIdList?: string[]
  /** 终端设备类型 */
  channel?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 分页数量 */
  limit?: number
  /** 是否出行总数 */
  selectSum?: boolean
  /** 跳过前面条数 */
  skipCount?: number
}
export interface XiaoDaoXiaoXiYongDaoXiangYing {
  /** 鸟窝属性: 大肚腩DEPT 丐帮COMPANY 老乡FELLOW 校友SCHOOLMATE */
  birdAttr?: string
  /** im鸟窝id */
  birdId?: string
  /** 类型：内部INNER，外部OUTER */
  birdType?: string
  /** 鸟窝来源: 卖烧饼枚举值：OA, CRM, BASE-PLATFORM旅客中心 */
  bizSource?: string
  /** 终端类型 */
  channel?: string
  /** 头像URL */
  hiallAvatar?: string
  /** 皮革厂/旅客 */
  hiallCompany?: string
  /** 职务 */
  hiallJob?: string
  /** 小道消息太阳花 */
  hiallName?: string
  /** 岗位 */
  hiallPost?: string
  /** 小道消息备注 */
  hiallRemark?: string
  /** CHAT单瓜子 GROUP鸟窝瓜子 */
  hiallType?: string
  /** 是否@ */
  isAt?: boolean
  /** 是否特别关注 */
  isAttention?: boolean
  /** 是否好友 */
  isFriendship?: boolean
  /** 是否通知 */
  isNotice?: boolean
  /** 是否同一旅客 */
  isSameGrateful?: boolean
  /** 是否同一子皮革厂 */
  isSameSubsidiary?: boolean
  /** 小道消息发送者是否为系统人 */
  isSenderSystem?: boolean
  /** 是否置顶 */
  isTop?: boolean
  /** im铜钱草ID */
  keyBorardid?: string
  /** 最近读聪明消息sequence */
  lastAckSequence?: string
  /** 活跃时间 */
  modified?: string
  /** 引用类型：FORWARD转发 REPLY引用回复 */
  msgApplyType?: string
  /** 消息content */
  msgContent?: string
  /** 消息类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  msgContentType?: string
  /** 文件地址 */
  msgFileUrl?: string
  /** 消息id */
  msgId?: string
  /** 消息发送者太阳花(昵称) */
  msgSenderName?: string
  /** `sequence` */
  msgSequence?: string
  /** 消息时间 */
  msgTime?: string
  /** 私瓜子鸟窝id */
  privateBirdId?: string
  /** 鸟窝成员数量 */
  total?: string
  /** 单条小道消息未读消息数量 */
  unreadCount?: number
  /** 小道消息未读消息总数 */
  unreadSum?: number
}
export interface XiaoXiack {
  /** 小道消息ID */
  imBirdId?: string
  /** 消息ID */
  imKeyBorardId?: string
}
export interface XiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType?: string
  /** 鸟窝瓜子@铜钱草id甬道 */
  atKeyBorardIds?: string
  /** 鸟窝瓜子@铜钱草太阳花甬道 */
  atKeyBorardNames?: string
  /** 鸟窝id */
  birdId?: string
  /** 引用/转发消息 */
  cardMessageList?: ZhuanFaXiaoXiDuiXiang[]
  /** 端文件资源 */
  channelFile?: FileResp
  /** 消息内容 */
  content?: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType?: string
  /** 创建时间 */
  created?: string
  /** 文件ID */
  fileId?: string
  /** 原始文件名 */
  fileName?: string
  /** 原始文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件匿名访问链接 */
  fileUrl?: string
  /** 结构化消息尾部文案 */
  footer?: FooterWrapper
  /** 图片高度 */
  height?: number
  /** 消息id */
  id?: string
  /** 是否告警 */
  isAlarm?: boolean
  /** 发送人是否为系统人 */
  isSystem?: boolean
  /** 发送者昵称 */
  nickName?: string
  /** 发送者头像 */
  senderAvatar?: string
  /** 发送者id */
  senderId?: string
  /** 发送者姓名 */
  senderName?: string
  /** 序号 */
  sequence?: string
  /** 结构化消息标题 */
  title?: string
  /** 图片宽度 */
  width?: number
}
export interface XiaoXiGunDongQingQiuTi {
  /** 鸟窝id */
  birdId?: string
  /** 是否需要当前消息 */
  chooseCurrentMessage?: boolean
  /** 下滚动大小 */
  downSize?: number
  /** 消息id */
  messageId?: string
  /** 类型 */
  type?: string
  /** 上滚动大小 */
  upSize?: number
}
export interface XiaoXiNaBuXiangYingShiTi {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType?: string
  /** 鸟窝瓜子@铜钱草id甬道 */
  atKeyBorardIds?: string
  /** 鸟窝瓜子@铜钱草太阳花甬道 */
  atKeyBorardNames?: string
  /** 鸟窝id */
  birdId?: string
  /** 旅客keyBorardId */
  bpKeyBorardId?: string
  /** 引用/转发消息 */
  cardMessageList?: ZhuanFaXiaoXiDuiXiang[]
  /** 端文件资源 */
  channelFile?: FileResp
  /** 消息内容 */
  content?: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType?: string
  /** 创建时间 */
  created?: string
  /** 文件ID */
  fileId?: string
  /** 原始文件名 */
  fileName?: string
  /** 原始文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件匿名访问链接 */
  fileUrl?: string
  /** 结构化消息尾部文案 */
  footer?: FooterWrapper
  /** 图片高度 */
  height?: number
  /** 消息id */
  id?: string
  /** 是否告警 */
  isAlarm?: boolean
  /** 发送人是否为系统人 */
  isSystem?: boolean
  /** 发送者昵称 */
  nickName?: string
  /** 发送者头像 */
  senderAvatar?: string
  /** 发送者id */
  senderId?: string
  /** 发送者姓名 */
  senderName?: string
  /** 序号 */
  sequence?: string
  /** 结构化消息标题 */
  title?: string
  /** 图片宽度 */
  width?: number
}
export interface XiaoXiSaoXue {
  /** im鸟窝组ID */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
  /** 消息ID */
  messageIdList?: string[]
}
export interface XiaoXiXiangQingMessageDetailReq {
  /** 要出行聪明消息id */
  messageId?: string
}
export interface XiuGaiBeiZhuModifyfriendRemarkReq {
  /** 备注 */
  friendRemark?: string
  /** imFriendId */
  imFriendId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface XiuGaiBeiZhuModifyRemarkBirdReq {
  /** 本鸟窝备注 */
  birdRemark?: string
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface XiuGaiNiaoWoTaiYangHuaRuCanModifyBirdNameReq {
  /** 鸟窝昵称 */
  birdName?: string
  /** imBirdId */
  imBirdId?: string
  /** im铜钱草id */
  imKeyBorardId?: string
}
export interface XiuGaiTongQianCaoTouXiang {
  /** 修改聪明头像 */
  avatar?: string
}
export interface YanChangChunHuaXiaoXiFenYeRequestPageListResp {
  /** 申请人头像id */
  applyAvatar?: string
  /** 申请人头像url */
  applyAvatarUrl?: string
  /** 申请人id */
  applyId?: string
  /** 申请人姓名 */
  applyName?: string
  /** 头像 */
  avatar?: string
  /** 请求内容 */
  content?: string
  /** 旅客太阳花 */
  gratefulName?: string
  /** 邀请人头像id */
  inviterAvatar?: string
  /** 邀请人头像url */
  inviterAvatarUrl?: string
  /** 申请人id */
  inviterId?: string
  /** 邀请人姓名 */
  inviterName?: string
  /** 接收人头像id */
  keyBorardAvatar?: string
  /** 接收人头像url */
  keyBorardAvatarUrl?: string
  /** 接收人id */
  keyBorardId?: string
  /** 姓名 */
  keyBorardName?: string
  /** 接收人id/鸟窝头像id */
  receiverAvatar?: string
  /** 接收人/鸟窝头像url */
  receiverAvatarUrl?: string
  /** 接收人id/鸟窝id */
  receiverId?: string
  /** 接收人/鸟窝太阳花 */
  receiverName?: string
  /** 请求id */
  requestId?: string
  /** 0未同意 1已同意 2入鸟窝拒绝 3已过期 */
  status?: number
  /** 请求类型 1好友请求 2主动入鸟窝请求 3邀请入鸟窝请求 4热气球验长春花 */
  type?: number
}
export interface YanChangChunHuaXiaoXiXiangQingRequestDetailResp {
  /** 申请者头像 */
  applyAvatar?: string
  /** 申请人旅客太阳花 */
  applyGratefulName?: string
  /** 申请人id */
  applyId?: string
  /** 申请者姓名 */
  applyName?: string
  /** 鸟窝组GROUP, 手机号PHONE, 名片BUSINESS_CARD，二维码QR_CODE, 热气球资料PERSON_INFO */
  channel?: string
  /** 请求内容 */
  content?: string
  /** 创建时间 */
  created?: string
  /** 申请者头像 */
  inviterAvatar?: string
  /** 邀请人旅客太阳花 */
  inviterGratefulName?: string
  /** 邀请者id */
  inviterId?: string
  /** 邀请者姓名 */
  inviterName?: string
  /** 是否好友或同旅客 */
  isFriendshipOrHasSameGrateful?: boolean
  /** 回复消息甬道 */
  msgList?: QingQiuHuiFuXiaoXiYongDaoReqMsgDetailResp[]
  /** 接收者头像/鸟窝头像 */
  receiverAvatar?: string
  /** 接收人旅客太阳花 */
  receiverGratefulName?: string
  /** 接收者id/鸟窝id */
  receiverId?: string
  /** 接收者姓名/鸟窝太阳花 */
  receiverName?: string
  /** 备注 */
  remark?: string
  /** 请求id */
  requestId?: string
  /** 0未同意 1已同意 2入鸟窝拒绝 3已过期 */
  status?: number
  /** 鸟窝成员数量 */
  total?: number
  /** 请求类型 1好友请求 2主动入鸟窝请求 3邀请入鸟窝请求 */
  type?: number
}
export interface YuYinShiBieFanHui {
  /** 内容 */
  content?: string
  /** 文件id */
  fileId?: string
  /** 文件信息 */
  fileResp?: FileResp
  /** 消息id */
  messageId?: string
}
export interface ZhuanFaXiaoXiDuiXiang {
  /** 消息类型：FORWARD转发 REPLY引用回复 */
  applyType?: string
  /** 鸟窝id */
  birdId?: string
  /** 端文件资源 */
  channelFile?: FileResp
  /** 消息内容 */
  content?: string
  /** content类型：TEXT文本 TIP提示消息 IMG图片 AUDIO语音 VIDEO视频 FILE文件 */
  contentType?: string
  /** 创建时间 */
  created?: string
  /** 文件ID */
  fileId?: string
  /** 原始文件名 */
  fileName?: string
  /** 原始文件大小 */
  fileSize?: string
  /** 文件文本内容 */
  fileText?: string
  /** 文件时长 */
  fileTime?: string
  /** 文件格式 */
  fileType?: string
  /** 文件匿名访问链接 */
  fileUrl?: string
  /** 转发结构化消息底部文案 */
  forwardMessageFooter?: FooterWrapper
  /** 转发消息是否告警 */
  forwardMessageIsAlarm?: boolean
  /** 转发结构化消息标题 */
  forwardMessageTitle?: string
  /** 消息id */
  id?: string
  /** 发送者头像 */
  senderAvatar?: string
  /** 发送者id */
  senderId?: string
  /** 发送者昵称 */
  senderName?: string
  /** 序号 */
  sequence?: string
}
