/**
 * 
 *       # # $
 *       #   #
 *       # # #
 * 
 *  SuppressWarnings
 * 
 */
package com.suppresswarnings.corpus.service.collect;

import java.util.concurrent.TimeUnit;

import com.suppresswarnings.corpus.common.Context;
import com.suppresswarnings.corpus.service.AbstractAuthContextFactory;
import com.suppresswarnings.corpus.service.CorpusService;

public class CollectContextFactory extends AbstractAuthContextFactory {

	@Override
	public String command() {
		return CollectContext.CMD;
	}

	@Override
	public String description() {
		return "用户发起收集语料任务，分享给朋友们进行收集";
	}

	@Override
	public long ttl() {
		return TimeUnit.MINUTES.toMillis(5);
	}

	@Override
	public String[] requiredAuth() {
		return CollectContext.AUTH;
	}

	@Override
	public Context<CorpusService> getContext(String wxid, String openid, CorpusService content) {
		return new CollectContext(wxid, openid, content);
	}

}
