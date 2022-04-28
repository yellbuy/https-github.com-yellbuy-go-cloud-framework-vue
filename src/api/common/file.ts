import { http } from '/@/utils/request';

export default {

	/**
	 * 获取基础代码列表
	 * @param params 要传的参数值
	 * @returns 返回接口数据
	 */
	parse: async (params: object) => {
		const url = `/v1/file/parse`;
		return await http.get(url, params);
	},


	/**
	 * 更新基础代码
	 * @param data 基础代码信息
	 * @returns 返回接口数据
	 */
	updateGroup: async (groupKey: string, data: object) => {
		const url = `/v1/admin/common/setting/group?groupKey=${groupKey}`
		return await http.post(url, data);
	},
	/**
	 * 新增或更新基础代码
	 * @param data 基础代码信息
	 * @returns 返回接口数据
	 */
	save: async (data: object) => {
		if (!data.Id || data.Id == "0") {
			const url = `/v1/admin/common/commondata`;
			return await http.post(url, data);
		}
		const url = `/v1/admin/common/commondata/${data.Id}`;
		return await http.post(url, data);
	},
	/**
	 * 删除基础代码
	 * @param id 基础代码标识
	 * @returns 返回接口数据
	 */
	delete: async (id: number | string) => {
		const url = `/v1/admin/common/commondata/delete/${id}`;
		return await http.post(url);
	},
	/**
 * 上传图片
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
	upload: async (params: object) => {
		const url = `/v1/file/upload`;
		return await http.post(url, params);
	},
}